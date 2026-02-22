// Auto-generated Epstein mock emails for gooogle.wtf
// Source: Public court documents (metadata only)

export interface EmailMessage {
  id: string;
  threadId: string;
  labelIds: string[];
  snippet: string;
  payload: {
    headers: Array<{name: string; value: string}>;
    body: {data: string; size: number};
  };
  sizeEstimate: number;
  historyId: string;
  internalDate: string;
}

export const epsteinInbox: EmailMessage[] = [
  {
    "id": "epstein001",
    "threadId": "epstein001",
    "labelIds": [
      "INBOX",
      "IMPORTANT"
    ],
    "snippet": "Confirming our meeting next Tuesday. Please arrange transportation.",
    "payload": {
      "headers": [
        {
          "name": "From",
          "value": "J. Epstein"
        },
        {
          "name": "To",
          "value": "G. Maxwell"
        },
        {
          "name": "Subject",
          "value": "Meeting Schedule - NY"
        },
        {
          "name": "Date",
          "value": "2015-06-14T14:30:00Z"
        }
      ],
      "body": {
        "data": "Confirming our meeting next Tuesday. Please arrange transportation.",
        "size": 67
      }
    },
    "sizeEstimate": 67,
    "historyId": "12345",
    "internalDate": "1434292200000"
  },
  {
    "id": "epstein002",
    "threadId": "epstein002",
    "labelIds": [
      "INBOX",
      "CATEGORY_UPDATES"
    ],
    "snippet": "Please review attached filings. Court deadline is Friday.",
    "payload": {
      "headers": [
        {
          "name": "From",
          "value": "Legal Team"
        },
        {
          "name": "To",
          "value": "J. Epstein"
        },
        {
          "name": "Subject",
          "value": "Document Request - Case #12345"
        },
        {
          "name": "Date",
          "value": "2019-07-08T09:15:00Z"
        }
      ],
      "body": {
        "data": "Please review attached filings. Court deadline is Friday.",
        "size": 57
      }
    },
    "sizeEstimate": 57,
    "historyId": "12345",
    "internalDate": "1562577300000"
  },
  {
    "id": "epstein003",
    "threadId": "epstein003",
    "labelIds": [
      "SENT"
    ],
    "snippet": "Flight plan confirmed. Departure 10:00 AM. Passengers: 4 confirmed.",
    "payload": {
      "headers": [
        {
          "name": "From",
          "value": "Pilot"
        },
        {
          "name": "To",
          "value": "J. Epstein"
        },
        {
          "name": "Subject",
          "value": "Flight Log - TEB to PBI"
        },
        {
          "name": "Date",
          "value": "2002-03-21T16:45:00Z"
        }
      ],
      "body": {
        "data": "Flight plan confirmed. Departure 10:00 AM. Passengers: 4 confirmed.",
        "size": 67
      }
    },
    "sizeEstimate": 67,
    "historyId": "12345",
    "internalDate": "1016729100000"
  },
  {
    "id": "epstein004",
    "threadId": "epstein004",
    "labelIds": [
      "INBOX",
      "CATEGORY_FINANCE"
    ],
    "snippet": "Transfer completed as requested. Reference #987654321.",
    "payload": {
      "headers": [
        {
          "name": "From",
          "value": "Accountant"
        },
        {
          "name": "To",
          "value": "J. Epstein"
        },
        {
          "name": "Subject",
          "value": "Wire Transfer Confirmation"
        },
        {
          "name": "Date",
          "value": "2005-11-03T11:20:00Z"
        }
      ],
      "body": {
        "data": "Transfer completed as requested. Reference #987654321.",
        "size": 54
      }
    },
    "sizeEstimate": 54,
    "historyId": "12345",
    "internalDate": "1131016800000"
  },
  {
    "id": "epstein005",
    "threadId": "epstein005",
    "labelIds": [
      "INBOX"
    ],
    "snippet": "Renovations scheduled for next month. Please confirm dates work.",
    "payload": {
      "headers": [
        {
          "name": "From",
          "value": "Property Manager"
        },
        {
          "name": "To",
          "value": "J. Epstein"
        },
        {
          "name": "Subject",
          "value": "Island Maintenance Schedule"
        },
        {
          "name": "Date",
          "value": "2008-04-17T13:00:00Z"
        }
      ],
      "body": {
        "data": "Renovations scheduled for next month. Please confirm dates work.",
        "size": 64
      }
    },
    "sizeEstimate": 64,
    "historyId": "12345",
    "internalDate": "1208437200000"
  }
];

export const epsteinEmailList = {
  messages: epsteinInbox,
  resultSizeEstimate: 5,
  nextPageToken: null as string | null
};
