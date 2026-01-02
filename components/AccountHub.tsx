
import React from 'react';
import { 
  Plus, 
  Youtube, 
  Instagram, 
  Linkedin, 
  ShieldCheck, 
  CreditCard,
  History,
  AlertCircle,
  Sparkles
} from 'lucide-react';

const AccountHub: React.FC = () => {
  const accounts = [
    { name: '@TechViral_US', platform: 'TikTok', status: 'Secure (US Node)', icon: <div className="bg-black p-2 rounded-lg text-white">𝕏</div> },
    { name: 'ViralInsights_Official', platform: 'YouTube', status: 'Secure (HK Node)', icon: <div className="bg-red-600 p-2 rounded-lg text-white"><Youtube size={18} /></div> },
    { name: 'ViraGo_Studio', platform: 'Instagram', status: 'Secure (US Node)', icon: <div className="bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-500 p-2 rounded-lg text-white"><Instagram size={18} /></div> },
  ];

  const creditsUsed = 420;
  const totalCredits = 1000;
  const percentage = (creditsUsed / totalCredits) * 100;

  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4">
      <div className="mb-12">
        <h1 className="text-3xl font-bold mb-2">Account Hub</h1>
        <p className="text-gray-400">Manage your global distribution matrix and AI resources.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Accounts List */}
        <div className="lg:col-span-8 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">Linked Channels</h2>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-bold transition-all">
              <Plus size={16} /> Link New Account
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {accounts.map((acc, idx) => (
              <div key={idx} className="glass p-5 rounded-2xl border border-white/10 hover:border-blue-500/30 transition-all flex items-center justify-between group">
                <div className="flex items-center gap-4">
                  {acc.icon}
                  <div>
                    <h3 className="font-bold text-sm">{acc.name}</h3>
                    <p className="text-xs text-gray-500">{acc.platform}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-green-500 uppercase mb-1">
                    <ShieldCheck size={12} /> {acc.status}
                  </div>
                  <button className="text-[10px] text-gray-500 group-hover:text-white underline underline-offset-4">Manage</button>
                </div>
              </div>
            ))}
          </div>

          <div className="glass rounded-2xl border border-white/10 overflow-hidden mt-8">
             <div className="p-4 border-b border-white/10 flex items-center justify-between">
                <h3 className="font-bold text-sm flex items-center gap-2">
                  <History size={16} className="text-blue-500" />
                  Recent Activity
                </h3>
             </div>
             <div className="divide-y divide-white/5">
                {[1,2,3].map(i => (
                  <div key={i} className="p-4 flex items-center justify-between hover:bg-white/5 transition-colors cursor-pointer">
                    <div className="flex items-center gap-4">
                       <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                          {/* Sparkles icon imported from lucide-react */}
                          <Sparkles size={18} />
                       </div>
                       <div>
                          <p className="text-sm font-medium">Localized video for TikTok</p>
                          <p className="text-xs text-gray-500">Target: United States • 2 hours ago</p>
                       </div>
                    </div>
                    <span className="text-xs font-bold text-gray-400">- 15 Credits</span>
                  </div>
                ))}
             </div>
          </div>
        </div>

        {/* Right Sidebar: Credits & Billing */}
        <div className="lg:col-span-4 space-y-6">
          <div className="glass p-8 rounded-3xl border border-white/10 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl -z-10 translate-x-10 -translate-y-10"></div>
             
             <h3 className="text-lg font-bold mb-8 flex items-center gap-2">
               <CreditCard size={20} className="text-blue-500" />
               AI Credits
             </h3>

             <div className="flex justify-center mb-8 relative">
                <svg className="w-40 h-40 transform -rotate-90">
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    className="text-white/5"
                  />
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    strokeDasharray={440}
                    strokeDashoffset={440 - (440 * percentage) / 100}
                    className="text-blue-500"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                   <span className="text-4xl font-extrabold">{totalCredits - creditsUsed}</span>
                   <span className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Remaining</span>
                </div>
             </div>

             <div className="space-y-4 mb-8">
                <div className="flex justify-between text-sm">
                   <span className="text-gray-400">Plan</span>
                   <span className="font-bold text-blue-400">Pro Creator</span>
                </div>
                <div className="flex justify-between text-sm">
                   <span className="text-gray-400">Auto-Refill</span>
                   <span className="font-bold text-green-500">Enabled</span>
                </div>
             </div>

             <button className="w-full py-4 bg-white text-black rounded-2xl font-bold hover:bg-gray-200 transition-all flex items-center justify-center gap-2 shadow-xl shadow-white/10">
               Top Up Credits
             </button>
          </div>

          <div className="glass p-6 rounded-2xl border border-white/10 bg-orange-500/5 border-orange-500/20">
             <div className="flex gap-4">
                <AlertCircle className="text-orange-500 shrink-0" size={20} />
                <div>
                   <h4 className="text-sm font-bold text-orange-500 mb-1">Security Update</h4>
                   <p className="text-xs text-gray-400 leading-relaxed">
                     Your YouTube API token expires in 3 days. Re-link your account to prevent distribution delays.
                   </p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountHub;
