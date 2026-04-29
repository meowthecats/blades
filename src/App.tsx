import React from "react";
import {
  AlertTriangle,
  Settings,
  ShieldCheck,
  Wrench,
  CheckCircle2,
  Zap
} from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col overflow-x-hidden">
      {/* Header Section */}
      <header className="bg-slate-900 text-white px-6 sm:px-8 py-6 flex flex-col sm:flex-row justify-between sm:items-center border-b-4 border-orange-500 gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tighter uppercase text-white">Retro Skates, Urban Future</h1>
          <p className="text-slate-400 text-xs mt-1 font-mono uppercase tracking-widest">Technical Analysis // Pro 78 & Bravoblade GL</p>
        </div>
        <div className="flex gap-4">
          <div className="text-right border-l border-slate-700 pl-4 hidden sm:block">
            <span className="block text-[10px] text-slate-500 font-bold uppercase">Topic</span>
            <span className="text-sm font-mono text-slate-300">Skate Upgrades</span>
          </div>
          <div className="text-right border-l border-slate-700 pl-4">
            <span className="block text-[10px] text-slate-500 font-bold uppercase">Build State</span>
            <span className="text-sm text-green-400 font-mono italic">Optimized</span>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col">
        {/* Top Grid: Overview & Profiles */}
        <div className="grid grid-cols-1 xl:grid-cols-12 border-b border-slate-200">
          
          {/* Sidebar / Overview & Warning */}
          <aside className="xl:col-span-3 bg-slate-100 border-r border-slate-200 p-6 flex flex-col gap-6">
            <div className="bg-white p-5 border border-slate-200 shadow-sm">
              <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Project Summary</h2>
              <p className="text-sm text-slate-600 font-serif italic leading-relaxed">
                A comprehensive deep-dive into the Pro 78 Bladerunner ABEC 5 and Rollerblade Bravoblade GL (72mm) inline skates. Discover their specs, history, and how to upgrade these classics for modern urban freeskating.
              </p>
            </div>

            {/* Warning Alert styled as Pro-Tip */}
            <div className="xl:mt-auto p-5 bg-orange-50 border border-orange-200 rounded">
              <h3 className="text-orange-800 text-[10px] font-black uppercase mb-3 flex items-center gap-1.5 pb-2 border-b border-orange-200">
                <AlertTriangle className="w-3.5 h-3.5" /> Structural Warning
              </h3>
              <div className="text-[11px] text-orange-900 leading-relaxed italic space-y-3 font-serif">
                <p>
                  <strong>Plastic Degradation (Bravoblade):</strong> Polyurethane plastics from the 90s can become brittle over time. Before doing any high-impact urban jumps, flex the boot heavily at room temperature to ensure it hasn't calcified, as older shells are prone to cracking.
                </p>
                <p>
                  <strong>Frame Limitations:</strong> Both of these skates feature non-removable, riveted composite/plastic frames. They are excellent for urban cruising, but <em>do not</em> perform stair gaps or massive drops on them. Plastic frames flex and can snap under extreme freeride loads compared to modern extruded aluminum frames.
                </p>
              </div>
            </div>
          </aside>

          {/* Profiles Columns */}
          <div className="xl:col-span-9 grid grid-cols-1 md:grid-cols-2">
            {/* Pro 78 Bladerunner Column */}
            <section className="border-r md:border-b-0 border-b border-slate-200 p-8 flex flex-col bg-white">
              <div className="mb-10">
                <span className="bg-slate-200 text-slate-700 px-2 py-0.5 text-[10px] font-bold rounded uppercase tracking-wider">Mid-2000s Classic</span>
                <h2 className="text-4xl font-black text-slate-800 leading-tight mt-3 uppercase">PRO 78 <br/>BLADERUNNER</h2>
                <p className="text-slate-500 text-sm mt-3 font-serif italic leading-relaxed">
                  Produced under the Bladerunner brand, a value-focused subsidiary of Rollerblade. Designed primarily for smooth bike paths, its softboot construction prioritizes immediate comfort.
                </p>
              </div>

              <div className="space-y-6 md:mt-auto">
                <div>
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-4 pb-2 border-b border-slate-100">Stock Configuration</h4>
                  <div className="space-y-1">
                    <SpecRow icon={<Zap />} label="Wheels" value="78mm, 80A-82A" />
                    <SpecRow icon={<Settings />} label="Bearings" value="ABEC 5 (Sealed)" />
                    <SpecRow icon={<ShieldCheck />} label="Boot Material" value="Softboot + Rigid Cuff" />
                    <SpecRow icon={<Wrench />} label="Frame" value="Composite Plastic" />
                    <SpecRow icon={<CheckCircle2 />} label="Closure" value="Lace, 45° Strap, Buckle" />
                  </div>
                </div>
              </div>
            </section>

            {/* Bravoblade GL Column */}
            <section className="p-8 flex flex-col bg-slate-50 md:bg-white">
              <div className="mb-10">
                <span className="bg-blue-100 text-blue-700 px-2 py-0.5 text-[10px] font-bold rounded uppercase tracking-wider">Late 90s Hardboot</span>
                <h2 className="text-4xl font-black text-slate-800 leading-tight mt-3 uppercase">BRAVOBLADE <br/>GL 72MM</h2>
                <p className="text-slate-500 text-sm mt-3 font-serif italic leading-relaxed">
                  A verifiable retro classic from the golden era. Rigid plastic hard shell offering exceptional ankle support. Though heavier than modern skates, its durability is legendary.
                </p>
              </div>

              <div className="space-y-6 md:mt-auto">
                <div>
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-4 pb-2 border-b border-slate-100">Stock Configuration</h4>
                  <div className="space-y-1">
                    <SpecRow icon={<Zap />} label="Wheels" value="72mm Profile" />
                    <SpecRow icon={<Settings />} label="Bearings" value="ABEC 3 / ABEC 5" />
                    <SpecRow icon={<ShieldCheck />} label="Boot Material" value="Polyurethane Shell" />
                    <SpecRow icon={<Wrench />} label="Frame" value="Integrated Plastic" />
                    <SpecRow icon={<CheckCircle2 />} label="Closure" value="3-Buckle or Lace+Buckle" />
                  </div>
                </div>
              </div>
            </section>
          </div>

        </div>

        {/* Bottom Row: Urban Upgrades Guide */}
        <section className="bg-slate-100 flex-1 py-12 px-6 sm:px-8 border-b border-slate-200">
          <div className="max-w-6xl mx-auto">
             <div className="mb-10 lg:w-2/3">
               <h2 className="text-2xl sm:text-3xl font-black text-slate-900 uppercase tracking-tighter mb-2">The Urban Upgrade Guide</h2>
               <p className="text-sm font-serif text-slate-600 italic">
                 Technical requirements to transform vintage recreational skates into capable urban machines.
               </p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                <UpgradeCard 
                  index={0}
                  title="1. Wheel Hardness & Profile"
                  description="Original 80A-82A wheels will be shredded instantly on rough city asphalt or during T-stops. You need high-rebound, high-durometer urban wheels with specialized PU formulas."
                  recommendations={[
                    "For Pro 78: Use 78mm/80mm at 84A or 85A. Rollerblade Hydrogen or Undercover urethane provides top-tier rebound.",
                    "For Bravoblade: Find 72mm aggressive wheels at 85A-88A. Bullet profile is preferred to maintain agility.",
                    "Size Scaling Theory: While vintage frames max out around 80mm, modern urban standards push to 84mm for smoother rolls over cracked pavement, or 90mm for maximizing top speed and momentum at a slight cost to tight carving capability.",
                    "PU Formulas: Invest in Ultra-High Rebound (UHR) or dual-density polyurethane. These advanced formulas provide essential grip for sharp city turns while maintaining extreme durability against aggressive T-stops.",
                    "Profile: Stick to 'Bullet' or 'Elliptical' outer profiles. Avoid 'flat/full' profiles, which make navigating unpredictable urban terrain sluggish."
                  ]}
                />
                <UpgradeCard 
                  index={1}
                  title="2. Bearing Modernization"
                  description="Old ABEC 3/5 bearings have likely dried out or rusted. Urban environments require high-impact, dirt-resistant bearings and a consistent maintenance cadence."
                  recommendations={[
                    "High-Impact Upgrades: Bones Swiss 6, Twincam ILQ-9 Pro, or Wicked ABEC 9 bearings are ideal for taking heavy shock from drops.",
                    "Shields & Spacers: Opt for single rubber-shielded (RS) bearings for easier cleaning. Replace old aluminum spacers with precision steel floating spacers.",
                    "Cleaning Routine: Clean every 1-2 months (or after rain) using a shaker bottle with citrus solvent or 91%+ isopropyl alcohol.",
                    "Lubrication: After drying completely, apply a heavier synthetic grease or gel instead of thin speed oil to resist puddles and water washout."
                  ]}
                />
                <UpgradeCard 
                  index={2}
                  title="3. Boot & Liner Overhaul"
                  description="The foams in vintage boots degrade or crumble over time. Modernizing the interior is critical for urban comfort, control, and absorbing impact."
                  recommendations={[
                    "Pro 78: Add a rigid insole (Superfeet Carbon) and use Neoprene ankle booties to mitigate softboot friction.",
                    "Shell Molding (Bravoblade): Apply a heat gun on low/medium setting 6-8 inches away from pinch points (typically the navicular or malleolus bones). Warm the PU shell until pliable, then use a blunt tool (like the rounded end of a screwdriver) to push the plastic outward from the inside. Hold the pressure until the plastic cools to permanently set the new shape and relieve pressure points.",
                    "Liner Choice - MYFIT: Features heat-moldable, dual-density foam. Extremely plush, adding significant volume to fill out wider 90s shells and block vibrations.",
                    "Liner Choice - Intuition: Uses high-density, closed-cell foam. Thinner and stiffer for ultimate power transfer and longevity, though it requires a longer break-in period.",
                    "Shock Absorption: Insert an Ennui Shock Sleeve or a specialized high-density gel wedge (like the Seba/FR shock absorber) directly beneath the liner inside the shell. This dampens the harsh impact of heavy urban landings on non-suspended vintage boots."
                  ]}
                />
                <UpgradeCard 
                  index={3}
                  title="4. Hardware & Lacing"
                  description="Urban skating requires maximum heel lock to prevent ankle injuries during sharp maneuvers and jumps."
                  recommendations={[
                    "Replace standard laces with Waxed Laces for superior tension retention.",
                    "Replace stripped or rusted axles with generic 6mm/8mm inline axles.",
                    "Bravoblade: Upgrade brittle plastic buckles to modern metal memory buckles (e.g., from FR skates).",
                    "Apply blue Loctite (medium strength) to all axle threads to prevent vibrating loose on rough terrain."
                  ]}
                />
             </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-slate-900 h-16 flex items-center px-6 sm:px-8">
        <div className="text-slate-500 font-mono text-[10px] uppercase tracking-widest text-center sm:text-left w-full flex justify-between items-center">
          <span>SKATEBOARD ARCHIVE REF: 1998-2004_LINEUP</span>
          <span className="hidden sm:inline-block">© {new Date().getFullYear()} Retro Skate Upkeep</span>
        </div>
      </footer>
    </div>
  );
}

function SpecRow({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
  return (
    <div className="flex justify-between items-end border-b border-slate-100 pb-2 mb-2">
      <span className="text-[11px] sm:text-xs text-slate-600 italic font-serif flex items-center gap-2 pr-2">
        <span className="text-slate-400 scale-75">{icon}</span>
        {label}
      </span>
      <span className="text-[11px] sm:text-sm font-mono leading-tight text-slate-800 text-right">{value}</span>
    </div>
  );
}

function UpgradeCard({ title, description, recommendations, index = 0 }: { title: string, description: string, recommendations: string[], index?: number }) {
  const isAlt = index % 2 === 1;
  return (
    <div className={`p-6 rounded h-full flex flex-col ${isAlt ? "bg-slate-900 text-white shadow-lg" : "border-2 border-dashed border-slate-300 bg-white text-slate-900"}`}>
      <h4 className={`text-[11px] font-bold uppercase tracking-widest mb-3 ${isAlt ? 'text-orange-400' : 'text-blue-600'}`}>{title}</h4>
      <p className={`text-[13px] mb-5 leading-relaxed font-serif ${isAlt ? 'text-slate-300' : 'text-slate-600'}`}>{description}</p>
      
      <div className="space-y-3 mt-auto">
         <div className={`text-[10px] font-black uppercase tracking-wider pb-2 border-b ${isAlt ? 'text-slate-500 border-slate-800' : 'text-slate-400 border-slate-200'}`}>Action Items</div>
         <ul className="space-y-2 text-xs font-mono">
           {recommendations.map((rec, i) => (
             <li key={i} className="flex gap-2 items-start">
               <div className={`w-1.5 h-1.5 mt-1 shrink-0 ${isAlt ? 'bg-orange-500' : 'bg-blue-500'}`}></div>
               <span className={`leading-snug ${isAlt ? 'text-slate-400' : 'text-slate-700'}`}>{rec}</span>
             </li>
           ))}
         </ul>
      </div>
    </div>
  );
}

