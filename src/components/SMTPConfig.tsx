import { Paper,Typography } from '@mui/material';
export default function SMTPConfig(){return(<div className="p-4 max-w-3xl mx-auto"><Typography variant="h5" sx={{fontWeight:600}} gutterBottom>SMTP Configuration</Typography>
<Paper variant="outlined" className="p-4"><Typography variant="body2">Common SMTP providers:</Typography>
<div className="space-y-2 mt-2 text-sm">{[{name:'Gmail',host:'smtp.gmail.com',port:'587'},{name:'SendGrid',host:'smtp.sendgrid.net',port:'587'},{name:'Mailgun',host:'smtp.mailgun.org',port:'587'},{name:'AWS SES',host:'email-smtp.us-east-1.amazonaws.com',port:'587'},{name:'Mailtrap',host:'smtp.mailtrap.io',port:'2525'}].map((p,i)=><div key={i} className="flex gap-2"><strong>{p.name}</strong><code>{p.host}:{p.port}</code></div>)}</div></Paper></div>);}
