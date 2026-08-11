import { useState } from 'react';import { TextField,Paper,Typography } from '@mui/material';
export default function SMTPTester(){const[form,setForm]=useState({host:'smtp.example.com',port:'587',user:'',pass:'',from:'test@example.com',to:''});
return(<div className="p-4 max-w-4xl mx-auto"><Typography variant="h5" sx={{fontWeight:600}} gutterBottom>SMTP Connection Tester</Typography>
<Typography variant="body2" color="text.secondary" className="mb-4">SMTP testing requires a backend service. Configure connection details below for reference.</Typography>
<div className="grid grid-cols-2 gap-2 mb-4"><TextField label="Host" value={form.host} onChange={e=>setForm({...form,host:e.target.value})} size="small"/><TextField label="Port" value={form.port} onChange={e=>setForm({...form,port:e.target.value})} size="small"/>
<TextField label="Username" value={form.user} onChange={e=>setForm({...form,user:e.target.value})} size="small"/><TextField label="Password" type="password" value={form.pass} onChange={e=>setForm({...form,pass:e.target.value})} size="small"/>
<TextField label="From" value={form.from} onChange={e=>setForm({...form,from:e.target.value})} size="small"/><TextField label="To" value={form.to} onChange={e=>setForm({...form,to:e.target.value})} size="small"/></div>
<Paper variant="outlined" className="p-4"><Typography variant="caption" color="text.secondary">Connection string: smtp://{form.user}:****@{form.host}:{form.port}</Typography></Paper></div>);}
