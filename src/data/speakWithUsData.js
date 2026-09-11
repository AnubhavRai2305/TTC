export const speakWithUsData = {
  hero: {
    eyebrow: 'Contact',
    title: 'Start a conversation.',
    lede: 'One form. Tell us which room you are in and it reaches the right person.',
  },
  formConfig: {
    legend: 'I am reaching out as',
    enquiryOptions: [
      { value: 'founder', label: 'Someone building a company' },
      { value: 'investor', label: 'An investor, or an adviser to one' },
      { value: 'partner', label: 'A potential partner or collaborator' },
      { value: 'press', label: 'Press or media' },
      { value: 'other', label: 'Something else' },
    ],
    fields: [
      {
        id: 'name',
        name: 'name',
        label: 'Name',
        type: 'text',
        autocomplete: 'name',
        required: true,
      },
      {
        id: 'email',
        name: 'email',
        label: 'Email',
        type: 'email',
        autocomplete: 'email',
        required: true,
      },
      {
        id: 'org',
        name: 'organisation',
        label: 'Organisation',
        type: 'text',
        autocomplete: 'organization',
        required: false,
      },
      {
        id: 'msg',
        name: 'message',
        label: 'Message',
        type: 'textarea',
        required: true,
      },
    ],
    submitText: 'Send message',
    footerNote:
      'We read everything and reply to most things within a week. If you are writing about a specific 1 Cr. Circle company, name it and we will make the introduction directly.',
    successMessage:
      'Thank you for reaching out. Your message has been routed to the appropriate team member and we will be in touch within a week.',
  },
  direct: {
    eyebrow: 'Direct',
    title: 'Or write to us',
    email: 'as@tiertwocapital.com',
    phone: '+91 85272 90989',
    locationEyebrow: 'Where we are',
    locationLines: ['Bodh Gaya · Patna · Bengaluru', 'Bihar 800001, India'],
    regulatoryNote:
      'Detailed information on our investment vehicles is made available privately to qualified investors on request, in line with applicable regulations. Select the investor option above and we will be in touch.',
  },
};
