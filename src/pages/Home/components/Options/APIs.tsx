import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SubSectionHeading } from '@/components/custom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { AppDispatch, RootState } from '@/store';

import { addApiRequest } from '../../features/homeSlice';
import { ApiResponseStatus } from '../../features/homeType';

interface APIRequest {
  id: string;
  name: string;
  type: string;
  endpoint: string;
  headers?: string;
  body?: string;
  expectedStatus: ApiResponseStatus;
}

export default function APIs() {
  const dispatch = useDispatch<AppDispatch>();
  const { toast } = useToast();
  const apiRequests = useSelector((state: RootState) => state.home.apiRequests);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newRequest, setNewRequest] = useState<APIRequest>({
    id: '',
    name: '',
    type: 'GET',
    endpoint: '',
    expectedStatus: '200',
  });

  const handleInputChange = (field: keyof APIRequest, value: string) => {
    setNewRequest({ ...newRequest, [field]: value });
  };

  const addNewRequest = () => {
    if (newRequest.name && newRequest.endpoint) {
      const newRequestWithId = { ...newRequest, id: Date.now().toString() };
      dispatch(addApiRequest(newRequestWithId));
      toast({
        title: 'API Request Added',
        description: 'Your API request has been successfully added.',
        variant: 'success',
      });
      setNewRequest({
        id: '',
        name: '',
        type: 'GET',
        endpoint: '',
        expectedStatus: '200',
      });
      setShowAddForm(false);
    }
  };

  return (
    <div className="w-full max-w-full overflow-hidden text-gray-800">
      <SubSectionHeading
        heading="API Requests"
        subHeading="Add and manage your API requests"
      />

      {apiRequests.length === 0 && !showAddForm && (
        <div className="mt-4 flex flex-col items-center py-4 text-center text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mb-2 h-12 w-12"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
            />
          </svg>
          <p className="text-lg font-semibold">No API requests yet</p>
          <p className="text-sm">
            Click the "Add New API Request" button to get started
          </p>
        </div>
      )}

      <Accordion type="single" collapsible className="mt-4 w-full space-y-4">
        {apiRequests.map((request) => (
          <AccordionItem
            key={request.id}
            value={request.id}
            className="rounded-lg border"
          >
            <AccordionTrigger className="px-4 py-2 hover:no-underline">
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center">
                  <span className="text-left capitalize">{request.name}</span>
                  <Badge variant="outline" className="ml-2">
                    {request.type}
                  </Badge>
                </div>
                <Badge variant="secondary" className="mr-2">
                  {request.expectedStatus}
                </Badge>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4">
              <div className="space-y-2">
                <p className="text-sm font-medium">
                  Endpoint: {request.endpoint}
                </p>
                {request.headers && (
                  <p className="text-sm font-medium">
                    Headers: {request.headers}
                  </p>
                )}
                {request.body && (
                  <p className="text-sm font-medium">Body: {request.body}</p>
                )}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {showAddForm ? (
        <div className="mt-4 space-y-4">
          <Separator className="mb-2 text-gray-400" />
          <label className="text-sm font-medium">New API Endpoint :-</label>
          <Input
            placeholder="API Name"
            value={newRequest.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
          />
          <Select
            value={newRequest.type}
            onValueChange={(value) => handleInputChange('type', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Request Type" />
            </SelectTrigger>
            <SelectContent>
              {['GET', 'POST', 'PUT', 'DELETE', 'PATCH'].map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Input
            placeholder="API Endpoint"
            value={newRequest.endpoint}
            onChange={(e) => handleInputChange('endpoint', e.target.value)}
          />
          <Textarea
            placeholder="API Headers (Optional)"
            value={newRequest.headers}
            onChange={(e) => handleInputChange('headers', e.target.value)}
          />
          <Textarea
            placeholder="API Body (Optional)"
            value={newRequest.body}
            onChange={(e) => handleInputChange('body', e.target.value)}
          />
          <Select
            value={newRequest.expectedStatus}
            onValueChange={(value) =>
              handleInputChange('expectedStatus', value as ApiResponseStatus)
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Expected API Response Status" />
            </SelectTrigger>
            <SelectContent>
              {['200', '201', '204', '400', '401', '403', '404', '500'].map(
                (status) => (
                  <SelectItem key={status} value={status}>
                    {status}
                  </SelectItem>
                )
              )}
            </SelectContent>
          </Select>
          <div className="flex space-x-2">
            <Button onClick={addNewRequest} className="w-full">
              Add API Request
            </Button>
            <Button
              onClick={() => setShowAddForm(false)}
              variant="outline"
              className="w-full"
            >
              Cancel
            </Button>
          </div>
        </div>
      ) : (
        <Button onClick={() => setShowAddForm(true)} className="mt-4 w-full">
          Add New API Request
        </Button>
      )}
    </div>
  );
}
