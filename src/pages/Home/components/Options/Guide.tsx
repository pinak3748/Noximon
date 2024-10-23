import React from 'react';

import { Button } from '@/components/ui/button';

export default function Guide() {
  return (
    <div className="mx-auto max-w-3xl rounded-lg bg-white p-6 shadow-md">
      <h1 className="mb-6 text-3xl font-bold">Welcome to Noximon 🚀</h1>

      <p className="mb-4">
        Noximon is a simple tool designed to help you keep track of your
        server's health and receive timely notifications. Follow these steps to
        get started:
      </p>

      <ol className="mb-6 list-inside list-decimal space-y-4">
        <li>
          <strong>Connect your notification channel:</strong> Choose where you
          want to receive alerts (e.g., Slack, Email, SMS).
        </li>
        <li>
          <strong>Add APIs to monitor:</strong> Specify the APIs you want to
          check for health status.
        </li>
        <li>
          <strong>Configure container details:</strong> Add the names of the
          containers you wish to monitor.
        </li>
        <li>
          <strong>Set up server configurations:</strong> Input necessary server
          details and parameters.
        </li>
        <li>
          <strong>Implement the monitoring script:</strong> Copy the provided
          bash script and add it to your server.
        </li>
        <li>
          <strong>Schedule regular checks:</strong> Create a new cron job to run
          the script at your desired interval.
        </li>
      </ol>

      <div className="mb-8 rounded-lg bg-slate-50 p-6">
        <h2 className="mb-3 flex items-center text-xl font-semibold">
          <span className="mr-2">🔧</span> Implementation Guide
        </h2>
        <div className="space-y-4 ">
          <p>1. Copy the monitoring script below to your server</p>
          <pre className="overflow-x-auto rounded bg-gray-800 p-4 text-sm text-white">
            {`#!/bin/bash
# Noximon Monitoring Script
# Version: 1.0.0

# Your customized monitoring script will appear here
# based on your configuration settings...`}
          </pre>
          <p>2. Add this crontab entry to schedule regular checks:</p>
          <pre className="overflow-x-auto rounded bg-gray-800 p-4 text-sm text-white">
            {`*/5 * * * * /path/to/noximon-monitor.sh  # Runs every 5 minutes`}
          </pre>
        </div>
      </div>

      <div className="mb-6 rounded border-l-4 border-green-500 bg-green-50 p-4">
        <p className="text-md">
          🎉 That's it! Your servers are now being monitored by Noximon. Sit
          back and let us handle the watching while you focus on development.
        </p>
      </div>

      <Button className="bg-blue-500 text-white hover:bg-blue-600">
        Get Started
      </Button>
    </div>
  );
}
