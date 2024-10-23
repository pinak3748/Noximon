import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { useToast } from '@/components/ui/use-toast';
import { RootState } from '@/store';

export default function BashShell() {
  const [code, setCode] = useState('');
  const { toast } = useToast();
  const { slackToken, apiRequests, dockerContainers, selectAllContainers } =
    useSelector((state: RootState) => state.home);

  useEffect(() => {
    generateBashScript();
  }, [slackToken, apiRequests, dockerContainers, selectAllContainers]);

  const generateBashScript = () => {
    let script = `#!/bin/bash

# Slack webhook URL
SLACK_WEBHOOK_URL="${slackToken ? slackToken : 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'}"

# Initialize arrays to store failed containers and APIs
failed_containers=()
failed_apis=()

# Function to send message to Slack
send_slack_message() {
    local message="$1"
    curl -X POST -H 'Content-type: application/json' --data "{\"text\":\"$message\"}" "$SLACK_WEBHOOK_URL"
}

# Function to check container status
check_container_status() {
    local container_name="$1"
    if ! docker ps --format '{{.Names}}' | grep -q "^$container_name$"; then
        failed_containers+=("$container_name")
    fi
}

# Function to check API status
check_api_status() {
    local api_name="$1"
    local api_url="$2"
    local expected_status="$3"
    local response=$(curl -s -o /dev/null -w "%{http_code}" "$api_url")
    if [ "$response" != "$expected_status" ]; then
        failed_apis+=("$api_name (Status: $response, Expected: $expected_status)")
    fi
}

# Main script logic
main() {
    # Check Docker containers
${
  selectAllContainers
    ? '    # Checking all Docker containers\n    for container in $(docker ps --format \'{{.Names}}\'); do\n        check_container_status "$container"\n    done'
    : dockerContainers
        .map((container) => `    check_container_status "${container.name}"`)
        .join('\n')
}

    # Check API endpoints
${apiRequests.map((api) => `    check_api_status "${api.name}" "${api.endpoint}" "${api.expectedStatus}"`).join('\n')}

    # Send Slack message if any containers or APIs failed
    if [ \${#failed_containers[@]} -ne 0 ] || \${#failed_apis[@]} -ne 0 ]; then
        message=":warning: *ALERT*: The following issues were detected:\\n"
        
        if \${#failed_containers[@]} -ne 0 ]; then
            message+="\\n*Containers not running:*\\n"
            for container in "\${failed_containers[@]}"; do
                message+="- *$container*\\n"
            done
        fi
        
        if [ \${#failed_apis[@]} -ne 0 ]; then
            message+="\\n*APIs not responding as expected:*\\n"
            for api in "\${failed_apis[@]}"; do
                message+="- *$api*\\n"
            done
        fi
        
        message+="\\nPlease investigate immediately! :rotating_light:"
        
        if [ "$SLACK_WEBHOOK_URL" != "YOUR_SLACK_WEBHOOK_URL" ]; then
            send_slack_message "$message"
            echo "Slack notification sent"
        else
            echo "Slack notification not sent. Please set the correct SLACK_WEBHOOK_URL."
        fi
    else
        echo "All containers are running and APIs are responding correctly"
    fi
}

# Run the main function
main

# Exit the script
exit 0`;

    setCode(script);
  };

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        toast({
          title: 'Copied!',
          description: 'Bash script copied to clipboard.',
        });
      })
      .catch((err) => {
        console.error('Failed to copy text: ', err);
        toast({
          title: 'Error',
          description: 'Failed to copy bash script.',
          variant: 'destructive',
        });
      });
  };

  return (
    <div className="relative">
      <button
        onClick={copyToClipboard}
        className="absolute right-2 top-2 rounded bg-blue-500 px-2 py-1 text-xs font-bold text-white hover:bg-blue-700"
      >
        Copy
      </button>
      <SyntaxHighlighter language="bash" style={oneDark} className="text-sm">
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
