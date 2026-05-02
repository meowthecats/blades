import React, { useState, useRef } from "react";
import {
  AlertTriangle,
  Settings,
  ShieldCheck,
  Wrench,
  CheckCircle2,
  Zap
} from "lucide-react";
import BootModel3D from "./components/BootModel3D";

export default function App() {
  const [selectedModel, setSelectedModel] = useState("pro78");

  const compatibilityData = {
    pro78: {
      name: "Pro 78 Bladerunner",
      size: "78mm or 80mm",
      hardness: "84A to 85A",
      notes: "Check clearance before installing 80mm wheels to ensure they don't rub against the bottom of the boot. Rollerblade Hydrogen or Undercover urethane provides top-tier rebound."
    },
    bravoblade: {
      name: "Bravoblade GL 72MM",
      size: "72mm",
      hardness: "85A to 88A",
      notes: "Due to the integrated frame, you are strictly limited to 72mm. Seek out aggressive/hockey wheels with a bullet profile to maintain agility."
    }
  };

  const selectedData = compatibilityData[selectedModel as keyof typeof compatibilityData];

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
                  visualComponent={<WheelIllustration />}
                  imageAlt="Inline skate wheels on pavement"
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
                  visualComponent={<BearingIllustration />}
                  imageAlt="Skate bearings"
                  description={
                    <div className="space-y-4">
                      <p>Old ABEC 3/5 bearings have likely dried out or rusted. Urban environments require high-impact, dirt-resistant bearings and a consistent maintenance cadence.</p>
                      <BearingMaintenanceGuide />
                    </div>
                  }
                  recommendations={[
                    "High-Impact Upgrades: Bones Swiss 6, Twincam ILQ-9 Pro, or Wicked ABEC 9 bearings are ideal for taking heavy shock from drops.",
                    "Shields & Spacers: Opt for single rubber-shielded (RS) bearings for easier cleaning. Replace old aluminum spacers with precision steel floating spacers.",
                    "Cleaning Routine: Remove shields with a pin, load bearings onto a bearing cleaning kit wand (e.g., Bones Bearing Cleaner), submerge in a citrus solvent or 91%+ isopropyl alcohol, and agitate vigorously. Rinse and dry completely.",
                    "Lubrication: For dry conditions, apply 2 drops of speed oil (re-lube monthly). For wet or dusty urban conditions, pack with heavier synthetic marine grease or gel (re-lube every 3-4 months) to prevent water washout."
                  ]}
                />
                <UpgradeCard 
                  index={2}
                  title="3. Boot & Liner Overhaul"
                  visualComponent={<BootModel3D />}
                  imageAlt="Skate boot and liner"
                  description={
                    <div className="space-y-4">
                      <p>The foams in vintage boots degrade or crumble over time. Modernizing the interior is critical for urban comfort, control, and absorbing impact.</p>
                      <BootFlexDemo />
                      <div className="p-4 bg-slate-800 rounded text-slate-200">
                        <h5 className="font-bold text-[11px] uppercase mb-2 tracking-wider text-orange-400">Bootliner Customization</h5>
                        <p className="text-xs mb-3">Pairing a high-performance liner with custom insoles dramatically improves power transfer and agility on older skates.</p>
                        <ul className="text-xs space-y-2">
                          <li><strong>Insoles:</strong> Use rigid options like Superfeet Carbon for arch support, or Yellow Superfeet for deeper heel-cupping.</li>
                          <li><strong>MYFIT Liners:</strong> Heat-moldable, dual-density foam. Extremely plush—adds volume to fill out wider 90s shells and blocks vibrations.</li>
                          <li><strong>Intuition Liners:</strong> High-density, closed-cell foam. Thinner, stiffer, and provides ultimate power transfer. Requires a longer break-in period but offers maximum durability.</li>
                        </ul>
                      </div>
                    </div>
                  }
                  recommendations={[
                    "Pro 78: Add a rigid insole and use Neoprene ankle booties to mitigate softboot friction.",
                    "Shell Molding (Bravoblade): Apply a heat gun on a low/medium setting 6-8 inches away from pinch points (typically the navicular or malleolus bones). Slowly warm the PU shell until it becomes pliable, then use a blunt tool (like the rounded end of a screwdriver handle) to push the plastic outward from the inside. Hold the pressure steadily until the plastic cools completely to permanently set the new shape and relieve pressure points for improved comfort.",
                    "Shock Absorption: Insert an Ennui Shock Sleeve or a specialized high-density gel wedge (like the Seba/FR shock absorber) directly beneath the liner inside the shell. This dampens the harsh impact of heavy urban landings on non-suspended vintage boots."
                  ]}
                />
                <UpgradeCard 
                  index={3}
                  title="4. Hardware & Lacing"
                  visualComponent={<HardwareIllustration />}
                  imageAlt="Hardware and laces"
                  description="Urban skating requires maximum heel lock to prevent ankle injuries during sharp maneuvers and jumps."
                  recommendations={[
                    <div key="laces" className="flex flex-col gap-2">
                       <span>Replace standard laces with Waxed Laces for superior tension retention.</span>
                       <LacesIllustration />
                    </div>,
                    "Replace stripped or rusted axles with generic 6mm/8mm inline axles.",
                    <div key="buckles" className="flex flex-col gap-2">
                       <span>Bravoblade: Upgrade brittle plastic buckles to modern metal memory buckles (e.g., from FR skates).</span>
                       <BuckleIllustration />
                    </div>,
                    <div key="loctite" className="flex flex-col gap-2">
                       <span>Apply blue Loctite (medium strength) to all axle threads to prevent vibrating loose on rough terrain.</span>
                       <LoctiteIllustration />
                    </div>
                  ]}
                />
             </div>

             {/* Compatibility Checker */}
             <div className="mt-12 bg-white border border-slate-200 p-6 sm:p-8 rounded shadow-sm">
                <h3 className="text-xl font-bold text-slate-800 uppercase tracking-tighter mb-5">Wheel Compatibility Checker</h3>
                <div className="flex flex-col sm:flex-row gap-6 items-start">
                  <div className="w-full sm:w-1/3">
                    <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-2" htmlFor="skate-model">Select Skates</label>
                    <select 
                      id="skate-model"
                      className="w-full p-3 border border-slate-300 rounded bg-slate-50 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow text-slate-800"
                      value={selectedModel}
                      onChange={(e) => setSelectedModel(e.target.value)}
                    >
                      <option value="pro78">Pro 78 Bladerunner</option>
                      <option value="bravoblade">Bravoblade GL 72MM</option>
                    </select>
                  </div>
                  <div className="w-full sm:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                     <div className="p-4 bg-slate-100 border border-slate-200 rounded">
                        <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">Compatible Size</span>
                        <span className="text-lg font-mono text-slate-800">{selectedData.size}</span>
                     </div>
                     <div className="p-4 bg-slate-100 border border-slate-200 rounded">
                        <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">Recommend Hardness</span>
                        <span className="text-lg font-mono text-slate-800">{selectedData.hardness}</span>
                     </div>
                     <div className="sm:col-span-2 p-4 bg-blue-50 border border-blue-100 rounded text-sm font-serif text-slate-600 italic">
                       {selectedData.notes}
                     </div>
                  </div>
                </div>
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

function BearingMaintenanceGuide() {
  return (
    <div className="mt-4 p-4 sm:p-5 bg-slate-800 border border-slate-700 rounded shrink-0 text-slate-200">
      <h5 className="font-bold text-[11px] uppercase mb-4 tracking-wider text-blue-400">Maintenance Guide: Clean & Lube</h5>
      <div className="space-y-4">
        <div className="flex gap-3">
           <div className="flex-shrink-0 w-7 h-7 rounded-full bg-slate-900 border border-slate-600 flex items-center justify-center font-bold text-slate-300 text-[10px]">1</div>
           <div>
             <div className="text-[11px] font-bold text-white mb-0.5">Remove Shields</div>
             <p className="text-[11px] leading-relaxed text-slate-400 font-sans">Use a push-pin or safety pin to carefully pry off the rubber shields.</p>
           </div>
        </div>
        <div className="flex gap-3">
           <div className="flex-shrink-0 w-7 h-7 rounded-full bg-slate-900 border border-slate-600 flex items-center justify-center font-bold text-slate-300 text-[10px]">2</div>
           <div>
             <div className="text-[11px] font-bold text-white mb-0.5">Soak & Shake</div>
             <p className="text-[11px] leading-relaxed text-slate-400 font-sans">Place in a cleaning bottle with citrus cleaner or isopropyl alcohol. Shake vigorously.</p>
           </div>
        </div>
        <div className="flex gap-3">
           <div className="flex-shrink-0 w-7 h-7 rounded-full bg-slate-900 border border-slate-600 flex items-center justify-center font-bold text-slate-300 text-[10px]">3</div>
           <div>
             <div className="text-[11px] font-bold text-white mb-0.5">Dry Completely</div>
             <p className="text-[11px] leading-relaxed text-slate-400 font-sans">Spin the bearings empty and wipe with a lint-free cloth. Air dry on a paper towel.</p>
           </div>
        </div>
        <div className="flex gap-3">
           <div className="flex-shrink-0 w-7 h-7 rounded-full bg-slate-900 border border-slate-600 flex items-center justify-center font-bold text-slate-300 text-[10px]">4</div>
           <div>
             <div className="text-[11px] font-bold text-white mb-0.5">Apply Lube</div>
             <p className="text-[11px] leading-relaxed text-slate-400 font-sans">Apply 2 drops of synthetic skate oil per bearing. Spin to distribute, replace shields.</p>
           </div>
        </div>
      </div>
      
      <div className="mt-5 pt-4 border-t border-slate-700">
        <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-2">Required Tools</div>
        <div className="flex flex-wrap gap-1.5 text-[9px] font-mono uppercase">
          <span className="px-1.5 py-0.5 bg-slate-900 rounded text-slate-300 border border-slate-700">Push-pin</span>
          <span className="px-1.5 py-0.5 bg-slate-900 rounded text-slate-300 border border-slate-700">Citrus Cleaner</span>
          <span className="px-1.5 py-0.5 bg-slate-900 rounded text-slate-300 border border-slate-700">Wash Bottle</span>
          <span className="px-1.5 py-0.5 bg-slate-900 rounded text-slate-300 border border-slate-700">Skate Oil</span>
          <span className="px-1.5 py-0.5 bg-slate-900 rounded text-slate-300 border border-slate-700">Paper Towels</span>
        </div>
      </div>
    </div>
  );
}

let audioCtx: AudioContext | null = null;
const initAudio = () => {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    audioCtx = new AudioContextClass();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
};

const playCreak = (intensity: number) => {
  try {
    const ctx = initAudio();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    // Low frequency rumble for creaking
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(60 + (intensity * 0.5), ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(30, ctx.currentTime + 0.05);
    
    // Subtle volume mapping based on flex intensity
    const maxGain = 0.03 + (intensity / 100) * 0.05;
    gain.gain.setValueAtTime(maxGain, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    osc.start();
    osc.stop(ctx.currentTime + 0.05);
  } catch (e) {
    // Graceful fail for missing audio support
  }
};

const playSnap = () => {
  try {
    const ctx = initAudio();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    // Sharp crack sound
    osc.type = 'square';
    osc.frequency.setValueAtTime(800, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(50, ctx.currentTime + 0.1);
    
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    osc.start();
    osc.stop(ctx.currentTime + 0.1);
  } catch (e) {
    // Graceful fail for missing audio support
  }
};

function BootFlexDemo() {
  const [flexAmount, setFlexAmount] = useState(0);
  const lastSoundFlex = useRef(0);
  const isSafe = flexAmount < 80;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    const wasSafe = flexAmount < 80;
    
    setFlexAmount(val);

    // Audio & Haptics Feedback
    if (wasSafe && val >= 80) { // Transition to brittle
      playSnap();
      if ('vibrate' in navigator) navigator.vibrate([40, 50, 40]);
    } else if (Math.abs(val - lastSoundFlex.current) > 2 && val < 80) {
      // Periodic creak while flexing safely
      playCreak(val);
      if ('vibrate' in navigator) navigator.vibrate(10);
      lastSoundFlex.current = val;
    }
  };

  return (
    <div className="p-4 sm:p-5 bg-slate-50 border border-slate-200 rounded shrink-0 text-slate-800">
      <h5 className="font-bold text-[11px] uppercase mb-1 tracking-wider text-slate-700">Flex Test Simulation (Interactive)</h5>
      <p className="text-xs text-slate-500 mb-4 font-serif">Drag the slider to test PU shell flexibility. Hear and feel the plastic stress. If the plastic feels rigid and resists heavy flexing, avoid high impact.</p>
      
      <div className="relative h-24 mb-4 flex items-center justify-center bg-slate-100 rounded border border-slate-200 overflow-hidden">
        {/* Abstract Boot representation */}
        <div 
          className={`w-24 border-4 rounded-t-xl rounded-bl-xl transition-all duration-100 ${isSafe ? 'border-blue-500' : 'border-red-500'}`}
          style={{ 
            height: '4rem',
            transform: `skewX(-${flexAmount * 0.2}deg) scaleY(${1 - flexAmount * 0.002})`,
            transformOrigin: 'bottom center',
            borderBottomRightRadius: '2rem'
          }}
        >
          <div className="w-full h-full flex items-center justify-center">
             <span className="text-[10px] font-black uppercase text-slate-400">{isSafe ? 'Pliable' : 'Brittle!'}</span>
          </div>
        </div>
      </div>

      <input 
        type="range" 
        min="0" 
        max="100" 
        value={flexAmount} 
        onChange={handleChange}
        className="w-full accent-blue-600 mb-2"
      />
      <div className="flex justify-between text-[10px] uppercase font-bold text-slate-400">
        <span>Rest</span>
        <span>Extreme Flex</span>
      </div>
    </div>
  );
}

function WheelIllustration() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full text-slate-400 group-hover:text-blue-500 transition-colors" fill="none" stroke="currentColor" strokeWidth="2">
      {/* Front View */}
      <circle cx="35" cy="50" r="30" />
      <circle cx="35" cy="50" r="12" />
      <circle cx="35" cy="50" r="4" fill="currentColor" />
      <path d="M35 20 L35 38" />
      <path d="M35 62 L35 80" />
      <path d="M20 50 L23 50" />
      <path d="M47 50 L50 50" />
      
      {/* Profile View (Bullet) */}
      <path d="M75 20 C 85 20, 90 40, 90 50 C 90 60, 85 80, 75 80 L 70 80 C 65 80, 65 20, 70 20 Z" />
      <line x1="75" y1="20" x2="75" y2="80" strokeDasharray="2 2" opacity="0.5" />
    </svg>
  );
}

function BearingIllustration() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full text-slate-400 group-hover:text-slate-300 transition-colors" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="50" cy="50" r="35" strokeWidth="3" />
      <circle cx="50" cy="50" r="15" strokeWidth="3" />
      {/* 7 ball bearings */}
      {[0, 1, 2, 3, 4, 5, 6].map(i => {
        const angle = (i * Math.PI * 2) / 7;
        const x = 50 + 25 * Math.cos(angle);
        const y = 50 + 25 * Math.sin(angle);
        return <circle key={i} cx={x} cy={y} r="4" fill="currentColor" />;
      })}
    </svg>
  );
}

function BootIllustration() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full text-slate-400 group-hover:text-blue-500 transition-colors" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
      <path d="M30,10 C40,10 40,20 40,30 C45,40 50,45 60,50 C70,55 80,60 85,75 C85,85 80,90 70,90 L30,90 C25,90 20,85 20,70 L20,10 Z" strokeWidth="3" />
      <path d="M30,5 C40,5 35,20 35,30 C40,40 45,45 55,50 M25,5 L25,30" stroke="#f97316" />
      <polygon points="20,75 35,75 35,90 20,90" fill="#f97316" opacity="0.3" stroke="none"/>
    </svg>
  );
}

function HardwareIllustration() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full text-slate-400 group-hover:text-orange-400 transition-colors" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
      {/* Axle screw */}
      <rect x="20" y="45" width="60" height="10" rx="2" />
      <rect x="15" y="40" width="10" height="20" rx="1" fill="currentColor" />
      {/* Hex key cutout */}
      <polygon points="12,47 16,45 20,47 20,53 16,55 12,53" fill="none" stroke="white" strokeWidth="1" />
      <rect x="75" y="42" width="10" height="16" rx="1" />
      <line x1="75" y1="45" x2="85" y2="45" />
      <line x1="75" y1="50" x2="85" y2="50" />
      <line x1="75" y1="55" x2="85" y2="55" />
    </svg>
  );
}

function LacesIllustration() {
  return (
    <div className="h-24 w-full bg-slate-800 rounded border border-slate-700 flex items-center justify-center group-hover:bg-slate-700 transition-colors">
      <svg viewBox="0 0 100 100" className="h-16 w-16 text-slate-400" stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="none">
        <path d="M 30,20 C 50,40 50,60 70,80" />
        <path d="M 70,20 C 50,40 50,60 30,80" />
        <circle cx="30" cy="20" r="3" fill="currentColor" />
        <circle cx="70" cy="20" r="3" fill="currentColor" />
        <circle cx="30" cy="80" r="3" fill="currentColor" />
        <circle cx="70" cy="80" r="3" fill="currentColor" />
      </svg>
    </div>
  );
}

function BuckleIllustration() {
  return (
    <div className="h-24 w-full bg-slate-800 rounded border border-slate-700 flex items-center justify-center group-hover:bg-slate-700 transition-colors">
      <svg viewBox="0 0 100 100" className="h-16 w-16 text-slate-400" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" fill="none">
        <rect x="20" y="30" width="30" height="40" rx="3" />
        <rect x="50" y="40" width="30" height="20" rx="1" fill="currentColor" />
        <line x1="25" y1="40" x2="45" y2="40" />
        <line x1="25" y1="50" x2="45" y2="50" />
        <line x1="25" y1="60" x2="45" y2="60" />
      </svg>
    </div>
  );
}

function LoctiteIllustration() {
  return (
    <div className="h-24 w-full bg-slate-800 rounded border border-slate-700 flex items-center justify-center group-hover:bg-slate-700 transition-colors">
      <svg viewBox="0 0 100 100" className="h-16 w-16 text-slate-400" stroke="currentColor" strokeLinejoin="round" fill="none">
        <path d="M 40,20 L 60,20 L 55,40 L 65,90 L 35,90 L 45,40 Z" strokeWidth="3" />
        <rect x="42" y="10" width="16" height="10" fill="currentColor" />
        <path d="M 50,95 C 45,100 55,100 50,95Z" fill="#06b6d4" stroke="#06b6d4" />
        <line x1="45" y1="60" x2="55" y2="60" strokeWidth="2" />
        <line x1="43" y1="70" x2="57" y2="70" strokeWidth="2" />
      </svg>
    </div>
  );
}

function UpgradeCard({ title, description, recommendations, index = 0, imageSrc, imageAlt, visualComponent }: { title: string, description: React.ReactNode, recommendations: React.ReactNode[], index?: number, imageSrc?: string, imageAlt?: string, visualComponent?: React.ReactNode }) {
  const isAlt = index % 2 === 1;
  return (
    <div className={`p-5 sm:p-6 xl:p-8 rounded h-full flex flex-col group ${isAlt ? "bg-slate-900 text-white shadow-lg" : "border-2 border-dashed border-slate-300 bg-white text-slate-900"}`}>
      {imageSrc && !visualComponent && (
        <div className="w-full h-48 sm:h-40 lg:h-48 mb-5 sm:mb-6 overflow-hidden rounded border border-slate-200 shrink-0 bg-slate-100">
          <img src={imageSrc} alt={imageAlt || ""} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" />
        </div>
      )}
      {visualComponent && (
        <div className={`w-full h-48 sm:h-40 lg:h-48 mb-5 sm:mb-6 rounded shrink-0 flex items-center justify-center p-6 transition-all duration-300 ${isAlt ? 'bg-slate-800 border border-slate-700' : 'bg-slate-50 border border-slate-200'}`}>
          {visualComponent}
        </div>
      )}
      <h4 className={`text-xs sm:text-[13px] font-bold uppercase tracking-widest mb-3 transition-colors ${isAlt ? 'text-orange-400 group-hover:text-orange-300' : 'text-blue-600 group-hover:text-blue-700'}`}>{title}</h4>
      <div className={`text-sm sm:text-[15px] mb-6 leading-relaxed font-serif ${isAlt ? 'text-slate-300' : 'text-slate-600'}`}>{description}</div>
      
      <div className="space-y-4 mt-auto">
         <div className={`text-[10px] sm:text-[11px] font-black uppercase tracking-wider pb-2 border-b ${isAlt ? 'text-slate-500 border-slate-800' : 'text-slate-400 border-slate-200'}`}>Action Items</div>
         <ul className="space-y-2.5 text-[11px] sm:text-xs font-mono">
           {recommendations.map((rec, i) => (
             <li key={i} className="flex gap-2.5 items-start">
               <div className={`w-1.5 h-1.5 mt-1 shrink-0 ${isAlt ? 'bg-orange-500' : 'bg-blue-500'}`}></div>
               <div className={`leading-snug w-full ${isAlt ? 'text-slate-400' : 'text-slate-700'}`}>{rec}</div>
             </li>
           ))}
         </ul>
      </div>
    </div>
  );
}

