import React, { useState } from 'react';
import { Accordion } from './components/Accordion';
import { Icons } from './components/Icons';
import { Logo } from './assets/Logo';

const FAQ_ITEMS = [
  {
    title: "How do I create a space?",
    content: "Tap the \"+\" button on the main screen, give your space a name, and start adding switches."
  },
  {
    title: "How do I add photos to items?",
    content: "Open a checklist item or switch on, and tap the camera icon to take a photo."
  },
  {
    title: "How do I report a bug?",
    content: "Email us at support@donekit.app with a description of the issue and any relevant screenshots. Include your device model, iOS version, and steps to reproduce."
  },
  {
    title: "How do I request a feature?",
    content: "Send your feature suggestions to support@donekit.app. We review all feedback to improve the app."
  },
  {
    title: "Does DoneKit require an account?",
    content: "No, DoneKit does not require an account. Your checklists and photos are available on this device."
  }
];

const App: React.FC = () => {
  const [view, setView] = useState<'support' | 'privacy' | 'terms'>('support');

  const navigateTo = (newView: 'support' | 'privacy' | 'terms') => {
    setView(newView);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground antialiased selection:bg-zinc-800 selection:text-white">
      
      {/* Header */}
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container flex h-16 max-w-screen-2xl items-center justify-center mx-auto px-4 md:px-8 relative">
          
          {view !== 'support' && (
            <button 
              onClick={() => navigateTo('support')}
              className="absolute left-4 md:left-8 p-2 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-all focus:outline-none focus:ring-2 focus:ring-zinc-800"
              aria-label="Go back"
            >
              <Icons.ArrowLeft size={20} />
            </button>
          )}

          <div className="flex items-center gap-3 font-semibold select-none cursor-pointer" onClick={() => navigateTo('support')}>
            <Logo />
            <span className="text-lg">DoneKit Support</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container max-w-3xl mx-auto px-4 py-12 md:py-20 space-y-6">
        
        {view === 'support' && (
          <div className="space-y-6 animate-in fade-in duration-500">
            {/* Hero Section */}
            <div className="space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
                Get Support
              </h1>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                This page provides support resources and answers to common questions.
              </p>
            </div>

            {/* Contact Section */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-6 md:p-8 shadow-sm">
              <div className="flex flex-col gap-6">
                 <div className="flex items-center gap-3">
                    <div className="p-2 w-fit rounded-md bg-zinc-900 text-zinc-100 border border-zinc-800">
                        <Icons.Mail size={20} />
                    </div>
                    <h2 className="text-xl font-semibold text-zinc-100">Contact</h2>
                 </div>
                 
                 <div className="space-y-4">
                    <p className="text-muted-foreground">For support inquiries, please email us at:</p>
                    <a href="mailto:support@donekit.app" className="text-2xl font-medium text-white hover:underline block break-all">
                      support@donekit.app
                    </a>
                    <p className="text-sm text-zinc-500">
                      Response time takes 1–3 business days.
                    </p>
                 </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-zinc-900/30 border border-zinc-800/50 rounded-xl p-6 md:p-8 shadow-sm backdrop-blur-sm">
              <h2 className="text-xl font-semibold mb-6 tracking-tight text-zinc-100">
                Frequently Asked Questions
              </h2>
              <Accordion items={FAQ_ITEMS} />
            </div>

            {/* Refund Section */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-6 md:p-8 shadow-sm">
               <div className="flex items-center gap-3 mb-4">
                   <div className="p-2 w-fit rounded-md bg-zinc-900 text-zinc-100 border border-zinc-800">
                      <Icons.Shield size={20} />
                   </div>
                   <h2 className="text-xl font-semibold text-zinc-100">Refund</h2>
               </div>
               
               <div className="space-y-6 text-muted-foreground leading-relaxed">
                 <p>
                   All purchases and refunds are processed directly by Apple. If you need to request a refund, visit Apple's support page and follow the instructions there.
                 </p>
                 <div className="rounded-lg bg-yellow-500/10 border border-yellow-500/20 p-4 text-sm text-zinc-300 flex gap-3 items-start">
                   <span className="shrink-0 mt-0.5">❗</span>
                   <p>
                     Please note: If Apple rejects your refund request, we're unable to override that decision, as all billing is handled exclusively through their platform.
                   </p>
                 </div>
               </div>
            </div>
          </div>
        )}

        {view === 'privacy' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Privacy Hero */}
            <div className="space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
                Privacy Policy
              </h1>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                Your privacy is important to us. This section explains how we collect, use, and protect your information.
              </p>
            </div>

            {/* Privacy Content Card */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-6 md:p-8 shadow-sm">
               <div className="flex items-center gap-3 mb-6">
                   <div className="p-2 w-fit rounded-md bg-zinc-900 text-zinc-100 border border-zinc-800">
                      <Icons.FileText size={20} />
                   </div>
                   <h2 className="text-xl font-semibold text-zinc-100">Policy Details</h2>
               </div>
               
               <div className="space-y-8">
                 <div>
                   <h3 className="text-lg font-medium text-zinc-100 mb-2">Data Collection</h3>
                   <p className="text-muted-foreground leading-relaxed">
                     The App stores your switches, spaces, and photos locally on your device. We do not collect or transmit your personal data to external servers.
                   </p>
                 </div>
                 
                 <div className="h-px w-full bg-zinc-800/50" />
                 
                 <div>
                   <h3 className="text-lg font-medium text-zinc-100 mb-2">Photos</h3>
                   <p className="text-muted-foreground leading-relaxed">
                     Any photos you take within the App are stored locally on your device and are not uploaded to any cloud service.
                   </p>
                 </div>

                 <div className="h-px w-full bg-zinc-800/50" />

                 <div>
                   <h3 className="text-lg font-medium text-zinc-100 mb-2">Analytics</h3>
                   <p className="text-muted-foreground leading-relaxed">
                     We may collect anonymous usage statistics to improve the App experience. This data cannot be used to identify you personally.
                   </p>
                 </div>
               </div>
            </div>
          </div>
        )}

        {view === 'terms' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Terms Hero */}
            <div className="space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
                Terms & Conditions
              </h1>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                Please read these terms carefully before using the app.
              </p>
            </div>

            {/* Terms Content Card */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-6 md:p-8 shadow-sm">
               <div className="flex items-center gap-3 mb-6">
                   <div className="p-2 w-fit rounded-md bg-zinc-900 text-zinc-100 border border-zinc-800">
                      <Icons.Scale size={20} />
                   </div>
                   <h2 className="text-xl font-semibold text-zinc-100">Terms of Service</h2>
               </div>
               
               <div className="space-y-8">
                 <div>
                   <p className="text-muted-foreground leading-relaxed">
                     By downloading, installing, or using DoneKit ("the App"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the App.
                   </p>
                   <p className="text-muted-foreground leading-relaxed mt-4">
                     The App is provided "as is" without warranties of any kind. We reserve the right to modify, suspend, or discontinue the App at any time without notice.
                   </p>
                   <p className="text-muted-foreground leading-relaxed mt-4">
                     You must be at least 13 years old to use this App. By using the App, you represent that you meet this age requirement.
                   </p>
                 </div>

                 <div className="h-px w-full bg-zinc-800/50" />

                 <div>
                   <h3 className="text-lg font-medium text-zinc-100 mb-4">User Responsibilities</h3>
                   <p className="text-muted-foreground mb-4">As a user of the App, you agree to:</p>
                   <ul className="list-disc list-outside ml-5 text-muted-foreground space-y-2 marker:text-zinc-600">
                     <li>Use the App only for lawful purposes</li>
                     <li>Not attempt to reverse engineer, modify, or tamper with the App</li>
                     <li>Not use the App in any way that could damage, disable, or impair its functionality</li>
                     <li>Take responsibility for all activities that occur under your device</li>
                   </ul>
                   <p className="text-muted-foreground mt-4 leading-relaxed">
                      You are solely responsible for the content you create within the App, including switch names and photos.
                   </p>
                 </div>

                 <div className="h-px w-full bg-zinc-800/50" />

                 <div>
                   <h3 className="text-lg font-medium text-zinc-100 mb-2">Intellectual Property</h3>
                   <p className="text-muted-foreground leading-relaxed">
                     All content, features, and functionality of the App, including but not limited to text, graphics, logos, icons, and software, are the exclusive property of DoneKit and are protected by international copyright, trademark, and other intellectual property laws.
                   </p>
                   <p className="text-muted-foreground leading-relaxed mt-4">
                     You may not reproduce, distribute, modify, or create derivative works from any part of the App without our prior written consent.
                   </p>
                 </div>

                 <div className="h-px w-full bg-zinc-800/50" />

                 <div>
                   <h3 className="text-lg font-medium text-zinc-100 mb-2">Limitation of Liability</h3>
                   <p className="text-muted-foreground leading-relaxed">
                     To the fullest extent permitted by applicable law, DoneKit shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.
                   </p>
                   <p className="text-muted-foreground leading-relaxed mt-4">
                     The App is designed as a personal reminder tool. We are not responsible for any consequences arising from missed reminders or forgotten tasks.
                   </p>
                 </div>

                 <div className="h-px w-full bg-zinc-800/50" />

                 <div>
                   <h3 className="text-lg font-medium text-zinc-100 mb-2">Changes to Terms</h3>
                   <p className="text-muted-foreground leading-relaxed">
                     We reserve the right to update these Terms at any time. We will notify you of any changes by posting the new Terms within the App.
                   </p>
                   <p className="text-muted-foreground leading-relaxed mt-4">
                     Your continued use of the App after any changes indicates your acceptance of the new Terms.
                   </p>
                   <p className="text-sm text-zinc-500 mt-6">
                     Last updated: December 2024
                   </p>
                 </div>
                 
                 <div className="h-px w-full bg-zinc-800/50" />

                 <div>
                    <h3 className="text-lg font-medium text-zinc-100 mb-2">Contact Us</h3>
                    <p className="text-muted-foreground">
                      If you have any questions about these Terms & Conditions, please contact us at: <a href="mailto:support@donekit.app" className="text-zinc-200 hover:underline">support@donekit.app</a>
                    </p>
                 </div>
               </div>
            </div>
          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row max-w-screen-2xl mx-auto px-4 md:px-8 text-center md:text-left">
          <p className="text-sm text-muted-foreground leading-loose">
            &copy; {new Date().getFullYear()} DoneKit. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <button 
              onClick={() => navigateTo('privacy')}
              className={`hover:text-foreground hover:underline transition-colors flex items-center gap-1 ${view === 'privacy' ? 'text-foreground' : ''}`}
            >
              Privacy
            </button>
            <button 
              onClick={() => navigateTo('terms')}
              className={`hover:text-foreground hover:underline transition-colors flex items-center gap-1 ${view === 'terms' ? 'text-foreground' : ''}`}
            >
              Terms
            </button>
          </div>
        </div>
      </footer>
      
    </div>
  );
};

export default App;