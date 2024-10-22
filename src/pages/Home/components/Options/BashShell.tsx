import React, { useState } from 'react';

import CodeEditor from '@uiw/react-textarea-code-editor';

export default function BashShell() {
  const [code, setCode] = useState(`#!/bin/bash

# Slack webhook URL
SLACK_WEBHOOK_URL="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"

# Function to send message to Slack
send_slack_message() {
    local message="$1"
    curl -X POST -H 'Content-type: application/json' --data "{\\"text\\":\\"$message\\"}" "$SLACK_WEBHOOK_URL"
}

# Function to check container status
check_container_status() {
    local container_name="$1"
    local status=$(sudo docker inspect --format='{{.State.Status}}' "$container_name" 2>/dev/null)
    
    if [ "$status" = "running" ]; then
        echo "Container $container_name is running"
        return 0
    else
        echo "Container $container_name is not running (status: $status)"
        return 1
    fi
}

# Function to check API status
check_api_status() {
    local api_url="$1"
    local response_status=$(curl -s -o /dev/null -w "%{http_code}" "$api_url")
    
    if [[ "$response_status" -eq 200 || "$response_status" -eq 201 ]]; then
        echo "API $api_url is responding with status $response_status"
        return 0
    else
        echo "API $api_url is not responding with status $response_status"
        return 1
    fi
}

# List of containers to check
containers=(
    "commodity-proxy-prod"
    "redis"
    "commodity-api-prod"
    "commodity-client-prod"
    "commodity-worker-prod"
)

# List of APIs to check
apis=(
    "http://18.189.214.208/api/"
    "http://18.189.214.208/"
)

# Check status of all containers
failed_containers=()
for container in "\${containers[@]}"; do
    if ! check_container_status "$container"; then
        failed_containers+=("$container")
    fi
done

# Check status of all APIs
failed_apis=()
for api in "\${apis[@]}"; do
    if ! check_api_status "$api"; then
        failed_apis+=("$api")
    fi
done

# Send Slack message if any containers or APIs failed
if [ \${#failed_containers[@]} -ne 0 ] || [ \${#failed_apis[@]} -ne 0 ]; then
    message=":warning: *ALERT*: The following issues were detected:\\n"
    
    if [ \${#failed_containers[@]} -ne 0 ]; then
        message+="\\n*Containers not running:*\\n"
        for container in "\${failed_containers[@]}"; do
            message+="- *$container*\\n"
        done
    fi
    
    if [ \${#failed_apis[@]} -ne 0 ]; then
        message+="\\n*APIs not responding with 200 or 201:*\\n"
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
fi`);
  return (
    <CodeEditor
      value={code}
      language="shell"
      placeholder="Please enter bash code."
      onChange={(evn) => setCode(evn.target.value)}
      padding={15}
      style={{
        backgroundColor: '#282C34',
        fontFamily:
          'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
        height: '100%',
        overflow: 'auto',
      }}
    />
  );
}
