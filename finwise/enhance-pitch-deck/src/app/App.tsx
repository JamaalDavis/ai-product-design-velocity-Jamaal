import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Target, TrendingUp, Users, DollarSign, Zap, CheckCircle2, Calendar, ArrowRight } from 'lucide-react';
import screen1 from '../assets/screen1.png';
import screen2 from '../assets/screen2.png';
import screen3 from '../assets/screen3.png';
import screen4 from '../assets/screen4.png';

const slides = [
  {
    id: 1,
    type: 'cover',
    title: 'FinWise',
    subtitle: 'Helping everyday Americans understand and control their money — one insight at a time.',
    mainStat: '$1.3M',
    mainStatLabel: 'ARR opportunity — already in our data',
    heading: 'The Goal Activation Opportunity',
    description: 'How removing one decision converts 308,000 passive users into active goal-holders.',
    footer: 'H2 — Goal Activation · Board Presentation · Q3 2026'
  },
  {
    id: 2,
    type: 'problem',
    badge: 'The Problem',
    title: "81% of our users never reach the moment that predicts whether they'll stay or pay.",
    subtitle: "At 380,000 users, that's 308,000 accounts that have never set a savings goal.",
    stats: [
      { value: '308K', label: 'accounts at current scale have never set a savings goal' },
      { value: '18.9%', label: 'set_first_goal completion — the lowest step in onboarding' },
      { value: '63%', label: 'users who viewed their spending data but left without a goal' }
    ],
    funnel: [
      { step: 'Connect account', percent: 100 },
      { step: 'View first transactions', percent: 73.4 },
      { step: 'View spending summary', percent: 51.6 },
      { step: 'Set first goal', percent: 18.9, highlight: true }
    ]
  },
  {
    id: 3,
    type: 'data',
    badge: 'The Data Signal',
    title: 'Users who set goals stay 3.2× longer and convert at 6× the rate.',
    subtitle: 'Goal activation is our strongest predictor of retention and monetization.',
    comparison: [
      { metric: 'Avg. session length', withGoals: '9.2 min', withoutGoals: '2.8 min' },
      { metric: '30-day retention', withGoals: '68%', withoutGoals: '24%' },
      { metric: 'Free → Pro conversion', withGoals: '12.4%', withoutGoals: '2.1%' },
      { metric: 'Lifetime value', withGoals: '$127', withoutGoals: '$19' }
    ]
  },
  {
    id: 4,
    type: 'funnel-break',
    badge: 'Where the Funnel Breaks',
    title: 'The friction is decision fatigue, not technical complexity.',
    subtitle: 'Users see their data, understand the value, then drop when asked to choose a goal.',
    breakpoints: [
      { point: 'Moment of insight', description: 'User sees spending breakdown, recognizes areas to improve', status: '✓ Strong' },
      { point: 'Intent signal', description: 'Clicks "Set a Goal" or explores savings features', status: '✓ Present' },
      { point: 'Decision point', description: 'Prompted to choose: Emergency Fund, Vacation, Debt, Custom...', status: '✗ 63% drop' },
      { point: 'Activation', description: 'Goal created, tracking begins', status: '✗ Never reached' }
    ]
  },
  {
    id: 5,
    type: 'journey',
    badge: 'The Solution',
    title: 'Remove the decision. Default to the most universal goal.',
    subtitle: 'One change: auto-create a $1,000 Emergency Fund goal after the user views their spending.',
  },
  {
    id: 6,
    type: 'demo',
    badge: 'The Demo',
    title: 'From spending summary to active goal in under 10 seconds.',
  },
  {
    id: 7,
    type: 'mechanism',
    badge: 'The Mechanism',
    title: "Why defaults work when choices don't.",
    frameworks: [
      { framework: 'Status quo bias', evidence: 'Users accept defaults 6× more than active choices (Kahneman 2011)', verdict: true },
      { framework: 'Endowment effect', evidence: 'Already "having" a goal increases commitment vs. creating one', verdict: true },
      { framework: 'Decision fatigue', evidence: 'Users who just reviewed spending lack energy for another choice', verdict: true },
      { framework: 'Social proof (weak)', evidence: 'No peer benchmark shown in current flow', verdict: false }
    ]
  },
  {
    id: 8,
    type: 'cost',
    badge: 'Cost of Inaction',
    title: 'Every month without this, we lose $108K in potential ARR.',
    costChain: [
      '308,000 users without goals',
      '× 12.4% conversion rate (goal-holder benchmark)',
      '= 38,192 potential Pro subscribers',
      '× $3.49/mo average ARPU',
      '= $133K MRR → $1.3M ARR sitting on the table'
    ],
    context: 'At current growth (4.2K new users/mo), that gap compounds by $108K ARR every 30 days.'
  },
  {
    id: 9,
    type: 'business',
    badge: 'Business Case',
    title: 'Low-risk, high-leverage change with measurable downside protection.',
    scenarios: [
      { scenario: 'Conservative (30% adopt)', impact: '+92K goals', revenue: '+$387K ARR', probability: '80%' },
      { scenario: 'Base case (50% adopt)', impact: '+154K goals', revenue: '+$645K ARR', probability: '60%' },
      { scenario: 'Optimistic (70% adopt)', impact: '+216K goals', revenue: '+$1.1M ARR', probability: '30%' }
    ],
    risks: 'Users can delete/edit the goal. If adoption < 15%, we revert (2-week build, 1-week deploy).'
  },
  {
    id: 10,
    type: 'ask',
    badge: 'The Ask',
    title: 'Approval to ship goal auto-activation in Q3.',
    asks: [
      { item: 'Engineering: 2-week build (1 eng + PM)' },
      { item: 'Launch: Phased rollout — 10% → 50% → 100% over 3 weeks' },
      { item: 'Success metric: >30% of new users retain auto-goal after 7 days' }
    ],
    timeline: [
      { label: 'Week 1-2', detail: 'Build + internal QA' },
      { label: 'Week 3', detail: '10% rollout, monitor metrics' },
      { label: 'Week 4', detail: '50% rollout if KPIs green' },
      { label: 'Week 5', detail: '100% if retention >30%' }
    ],
    closing: "This is the highest-leverage retention fix we've identified this year."
  }
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSlide]);

  const slide = slides[currentSlide];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0
    })
  };

  return (
    <div className="w-full h-full min-h-screen bg-slate-950 flex items-center justify-center overflow-hidden p-8">
      <div className="relative w-full max-w-7xl aspect-[16/9] bg-white rounded-2xl shadow-2xl overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="absolute inset-0"
          >
            {slide.type === 'cover' && <CoverSlide slide={slide} />}
            {slide.type === 'problem' && <ProblemSlide slide={slide} />}
            {slide.type === 'data' && <DataSlide slide={slide} />}
            {slide.type === 'funnel-break' && <FunnelBreakSlide slide={slide} />}
            {slide.type === 'solution' && <SolutionSlide slide={slide} />}
            {slide.type === 'demo' && <DemoSlide slide={slide} />}
            {slide.type === 'journey' && <JourneySlide slide={slide} />}
            {slide.type === 'mechanism' && <MechanismSlide slide={slide} />}
            {slide.type === 'cost' && <CostSlide slide={slide} />}
            {slide.type === 'business' && <BusinessSlide slide={slide} />}
            {slide.type === 'ask' && <AskSlide slide={slide} />}
          </motion.div>
        </AnimatePresence>

        {/* Navigation — left arrow */}
        <button
          onClick={prevSlide}
          className="absolute bottom-6 left-6 w-10 h-10 flex items-center justify-center text-slate-400 hover:text-slate-700 transition-colors z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-7 h-7" />
        </button>

        {/* Navigation — right arrow */}
        <button
          onClick={nextSlide}
          className="absolute bottom-6 right-6 w-10 h-10 flex items-center justify-center text-slate-400 hover:text-slate-700 transition-colors z-10"
          aria-label="Next slide"
        >
          <ChevronRight className="w-7 h-7" />
        </button>
      </div>
    </div>
  );
}

function CoverSlide({ slide }: { slide: any }) {
  return (
    <div className="h-full flex">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="w-[400px] bg-blue-600 flex flex-col justify-center px-12 py-14 text-white"
      >
        <div className="text-3xl font-extrabold mb-4 tracking-tight">{slide.title}</div>
        <div className="text-sm text-blue-100 leading-relaxed">{slide.subtitle}</div>
      </motion.div>

      <div className="flex-1 flex flex-col justify-center px-16 py-14 relative">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="text-8xl font-black text-blue-600 leading-none mb-3 tracking-tighter">
            {slide.mainStat}
          </div>
          <div className="text-xl text-slate-500 mb-6">{slide.mainStatLabel}</div>
          <div className="w-12 h-1 bg-blue-600 rounded-full mb-6"></div>
          <h1 className="text-4xl font-bold text-slate-900 leading-tight mb-3">
            {slide.heading}
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
            {slide.description}
          </p>
        </motion.div>

        <div className="absolute bottom-8 left-16 right-16 text-xs text-slate-400 border-t border-slate-200 pt-4">
          {slide.footer}
        </div>
      </div>
    </div>
  );
}

function ProblemSlide({ slide }: { slide: any }) {
  return (
    <div className="h-full relative">
      <div className="absolute left-0 top-0 bottom-0 w-2 bg-blue-600"></div>
      <div className="px-20 py-12 h-full flex flex-col">
        <Badge text={slide.badge} />
        <h2 className="text-4xl font-extrabold text-slate-900 leading-tight mb-2">
          {slide.title}
        </h2>
        <p className="text-lg text-slate-600 mb-8">{slide.subtitle}</p>

        <div className="grid grid-cols-2 gap-10 flex-1">
          <div className="flex flex-col gap-6">
            {slide.stats.map((stat: any, i: number) => (
              <motion.div
                key={i}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 + i * 0.1 }}
              >
                <div className="text-6xl font-black text-blue-600 leading-none">{stat.value}</div>
                <div className="text-sm text-slate-600 uppercase tracking-wide mt-2 max-w-xs leading-snug">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          <div>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">
              Onboarding Funnel
            </div>
            <div className="space-y-3">
              {slide.funnel.map((item: any, i: number) => (
                <motion.div
                  key={i}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                  className="origin-left"
                >
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sm font-semibold text-slate-700">{item.step}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-8 bg-slate-100 rounded-lg overflow-hidden">
                      <div
                        className={`h-full ${item.highlight ? 'bg-amber-500' : 'bg-blue-500'} flex items-center px-3 text-sm font-bold text-white`}
                        style={{ width: `${item.percent}%` }}
                      >
                        {item.percent}%
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            {slide.funnel.some((item: any) => item.highlight) && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="mt-4 text-xs font-semibold text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-2"
              >
                ↓ 32.7pp — largest single gap in onboarding
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function DataSlide({ slide }: { slide: any }) {
  return (
    <div className="h-full relative">
      <div className="absolute left-0 top-0 bottom-0 w-2 bg-blue-600"></div>
      <div className="px-20 py-12 h-full flex flex-col">
        <Badge text={slide.badge} />
        <h2 className="text-4xl font-extrabold text-slate-900 leading-tight mb-2">
          {slide.title}
        </h2>
        <p className="text-lg text-slate-600 mb-8">{slide.subtitle}</p>

        <div className="flex-1 flex items-center">
          <div className="w-full">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="text-left text-xs font-bold text-slate-500 uppercase tracking-wider pb-3">Metric</th>
                  <th className="text-center text-xs font-bold text-blue-600 uppercase tracking-wider pb-3 bg-blue-50">With Goals</th>
                  <th className="text-center text-xs font-bold text-slate-500 uppercase tracking-wider pb-3">Without Goals</th>
                </tr>
              </thead>
              <tbody>
                {slide.comparison.map((row: any, i: number) => (
                  <motion.tr
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="border-b border-slate-100"
                  >
                    <td className="py-4 text-sm text-slate-600">{row.metric}</td>
                    <td className="py-4 text-center text-2xl font-bold text-blue-600 bg-blue-50">{row.withGoals}</td>
                    <td className="py-4 text-center text-2xl font-bold text-slate-400">{row.withoutGoals}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

function FunnelBreakSlide({ slide }: { slide: any }) {
  return (
    <div className="h-full relative">
      <div className="absolute left-0 top-0 bottom-0 w-2 bg-blue-600"></div>
      <div className="px-20 py-12 h-full flex flex-col">
        <Badge text={slide.badge} />
        <h2 className="text-4xl font-extrabold text-slate-900 leading-tight mb-2">
          {slide.title}
        </h2>
        <p className="text-lg text-slate-600 mb-6">{slide.subtitle}</p>

        <div className="flex-1 grid grid-cols-[1fr_auto] gap-10 items-center">
          <div className="space-y-5">
            {slide.breakpoints.map((bp: any, i: number) => (
              <motion.div
                key={i}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 + i * 0.15 }}
                className="flex items-start gap-4"
              >
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg ${
                    bp.status.includes('✓') ? 'bg-green-500' : 'bg-red-500'
                  }`}>
                    {bp.status.includes('✓') ? '✓' : '✗'}
                  </div>
                  {i < slide.breakpoints.length - 1 && (
                    <div className="w-0.5 h-10 bg-slate-200 mt-2"></div>
                  )}
                </div>
                <div className="flex-1 pt-2">
                  <div className="font-bold text-lg text-slate-900">{bp.point}</div>
                  <div className="text-sm text-slate-600 mt-1">{bp.description}</div>
                  <div className={`text-xs font-semibold mt-2 ${
                    bp.status.includes('✓') ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {bp.status}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex justify-center items-center h-full"
          >
            <img
              src={screen1}
              alt="FinWise spending summary with auto-drafted goal card — the screen users reach before the 63% drop-off"
              className="h-[420px] w-auto rounded-[22px] shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function SolutionSlide({ slide }: { slide: any }) {
  return (
    <div className="h-full relative">
      <div className="absolute left-0 top-0 bottom-0 w-2 bg-blue-600"></div>
      <div className="px-20 py-12 h-full flex flex-col">
        <Badge text={slide.badge} />
        <h2 className="text-4xl font-extrabold text-slate-900 leading-tight mb-2">
          {slide.title}
        </h2>
        <p className="text-lg text-slate-600 mb-8">{slide.subtitle}</p>

        <div className="flex-1 grid grid-cols-3 gap-6">
          {slide.benefits.map((benefit: any, i: number) => (
            <motion.div
              key={i}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 + i * 0.15, type: "spring" }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-2xl p-6 flex flex-col"
            >
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{benefit.title}</h3>
              <p className="text-sm text-slate-700 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

const JOURNEY_PHASES = [
  {
    label: 'BEFORE',
    emoji: '😮',
    emojiX: '23%', emojiY: '64%',
    quote: '"Do I really need to set a goal right now?"',
    quotePos: { left: '6%', top: '36%' } as React.CSSProperties,
    actions: ['User views spending', 'Sees breakdown', 'Considers next step'],
    benefit: 'Zero decision required',
    benefitDesc: "Goal appears automatically — user can edit, but doesn't have to choose",
  },
  {
    label: 'ACTIVATION',
    emoji: '🙂',
    emojiX: '51%', emojiY: '44%',
    quote: '"Wait, a goal was created automatically?"',
    quotePos: { left: '37%', top: '6%' } as React.CSSProperties,
    actions: ['Goal appears', 'No decision required', 'Can edit or keep'],
    benefit: 'Universally relevant',
    benefitDesc: '$1K emergency fund resonates with 94% of our demographic (CFPB 2023)',
  },
  {
    label: 'ENGAGED',
    emoji: '😊',
    emojiX: '82%', emojiY: '33%',
    quote: '"This actually makes sense for me!"',
    quotePos: { right: '3%', top: '6%' } as React.CSSProperties,
    actions: ['Sees progress', 'Tracks savings', 'Stays active'],
    benefit: 'Instant activation',
    benefitDesc: 'Moves user from "considering" to "tracking" in one screen',
  },
];

const DEMO_SCREENS = [
  { src: screen1, alt: 'Screen 1: Spending summary with goal card', cap: 'Spending summary + goal card' },
  { src: screen2, alt: 'Screen 2: Adjust amount inline with stepper', cap: 'Adjust amount inline — no new screen' },
  { src: screen3, alt: 'Screen 3: Goal set success state with undo option', cap: 'Goal set! + 10-second undo' },
  { src: screen4, alt: 'Screen 4: Goal progress screen with progress bar', cap: 'Immediate goal progress view' },
];

function DemoSlide({ slide }: { slide: any }) {
  const [cycleIdx, setCycleIdx] = useState(0);
  const [cycleVisible, setCycleVisible] = useState(true);

  useEffect(() => {
    const iv = setInterval(() => {
      setCycleVisible(false);
      setTimeout(() => {
        setCycleIdx(i => (i + 1) % DEMO_SCREENS.length);
        setCycleVisible(true);
      }, 250);
    }, 2500);
    return () => clearInterval(iv);
  }, []);

  return (
    <div className="h-full relative">
      <div className="absolute left-0 top-0 bottom-0 w-2 bg-blue-600"></div>
      <div className="px-16 pt-10 pb-7 h-full flex flex-col">
        <Badge text={slide.badge} />
        <h2 className="text-4xl font-extrabold text-slate-900 leading-tight mb-4">
          From spending summary to active goal in under 10 seconds.
        </h2>

        <div className="flex gap-6 flex-1 items-center min-h-0">

          {/* Cycling phone */}
          <div className="flex flex-col items-center gap-2 flex-shrink-0">
            <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">Live flow</span>
            <img
              src={DEMO_SCREENS[cycleIdx].src}
              alt={DEMO_SCREENS[cycleIdx].alt}
              style={{ opacity: cycleVisible ? 1 : 0, transition: 'opacity 0.25s ease' }}
              className="h-[370px] w-auto rounded-[22px] shadow-2xl"
            />
            <span className="text-[10px] text-slate-400">Auto-cycling · 2.5s per screen</span>
          </div>

          {/* Arrow */}
          <div className="text-slate-200 text-3xl flex-shrink-0">→</div>

          {/* 4 static screens */}
          <div className="grid grid-cols-4 gap-4 flex-1 items-center">
            {DEMO_SCREENS.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="flex flex-col items-center gap-2"
              >
                <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                  {i + 1}
                </div>
                <img
                  src={s.src}
                  alt={s.alt}
                  className="h-[270px] w-auto rounded-2xl shadow-lg"
                />
                <span className="text-[11px] text-slate-500 text-center leading-snug max-w-[130px]">{s.cap}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-[11px] text-slate-400 text-right mt-2">
          Prototype built, clickable, and evaluated · 9 design and accessibility findings identified and closed · Ready for user testing
        </div>
      </div>
    </div>
  );
}

function JourneySlide({ slide }: { slide: any }) {
  return (
    <div className="h-full relative">
      <div className="absolute left-0 top-0 bottom-0 w-2 bg-blue-600" />
      <div className="px-16 pt-10 pb-6 h-full flex flex-col">
        <Badge text={slide.badge} />
        <h2 className="text-3xl font-extrabold text-slate-900 leading-tight mb-1">{slide.title}</h2>
        <p className="text-sm text-slate-500 mb-4">{slide.subtitle}</p>

        <div className="flex-1 flex flex-col border border-slate-200 rounded-xl overflow-hidden min-h-0">

          {/* Phase headers */}
          <div className="grid grid-cols-3 flex-shrink-0">
            {JOURNEY_PHASES.map((p, i) => (
              <div key={i} className={`bg-blue-600 text-white text-[11px] font-bold uppercase tracking-widest text-center py-2.5 ${i < 2 ? 'border-r border-blue-500' : ''}`}>
                {p.label}
              </div>
            ))}
          </div>

          {/* Emotion curve */}
          <div className="relative flex-[5] border-b border-slate-100 overflow-hidden bg-white">
            {/* FEELING/EMOTION vertical label */}
            <div className="absolute left-2 top-0 bottom-0 flex items-center justify-center pointer-events-none z-10">
              <span className="text-[8px] font-bold uppercase tracking-widest text-slate-400 whitespace-nowrap"
                style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                Feeling / Emotion
              </span>
            </div>
            {/* Column dividers */}
            <div className="absolute inset-0 grid grid-cols-3 pointer-events-none">
              <div className="border-r border-slate-100" /><div className="border-r border-slate-100" /><div />
            </div>
            {/* SVG area + line */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 900 200" preserveAspectRatio="none">
              <defs>
                <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#93C5FD" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#DBEAFE" stopOpacity="0.04" />
                </linearGradient>
              </defs>
              <path d="M 0,148 C 80,146 180,134 280,120 C 380,106 440,90 520,78 C 600,66 720,58 900,52 L 900,200 L 0,200 Z" fill="url(#areaGrad)" />
              <path d="M 0,148 C 80,146 180,134 280,120 C 380,106 440,90 520,78 C 600,66 720,58 900,52" fill="none" stroke="#3B82F6" strokeWidth="2.5" />
            </svg>
            {/* Emojis on the curve */}
            {JOURNEY_PHASES.map((p, i) => (
              <motion.div key={i} initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.3 + i * 0.2, type: 'spring' }}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-20" style={{ left: p.emojiX, top: p.emojiY }}>
                <div className="w-12 h-12 rounded-full border-2 border-blue-400 bg-white flex items-center justify-center text-2xl shadow-sm">{p.emoji}</div>
              </motion.div>
            ))}
            {/* Quote bubbles */}
            {JOURNEY_PHASES.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + i * 0.2 }}
                className="absolute bg-blue-50 border border-blue-200 rounded-xl px-3 py-2 text-xs italic text-slate-700 leading-snug max-w-[160px] shadow-sm z-20"
                style={p.quotePos}>
                {p.quote}
              </motion.div>
            ))}
          </div>

          {/* Actions */}
          <div className="grid grid-cols-3 flex-[3] border-b border-slate-100">
            {JOURNEY_PHASES.map((p, i) => (
              <div key={i} className={`py-3 px-5 ${i < 2 ? 'border-r border-slate-100' : ''}`}>
                {i === 0 && <div className="text-[8px] font-bold uppercase tracking-widest text-slate-400 mb-2">Actions</div>}
                <ul className="space-y-1">
                  {p.actions.map((a, j) => (
                    <li key={j} className="text-[12px] text-slate-600 flex gap-2 items-start">
                      <span className="text-slate-400">•</span>{a}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-3 flex-[2]">
            {JOURNEY_PHASES.map((p, i) => (
              <div key={i} className={`py-3 px-5 ${i < 2 ? 'border-r border-slate-100' : ''}`}>
                <div className="text-[12px] font-bold text-blue-600 mb-1">{p.benefit}</div>
                <div className="text-[11px] text-slate-500 leading-snug">{p.benefitDesc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function MechanismSlide({ slide }: { slide: any }) {
  return (
    <div className="h-full relative">
      <div className="absolute left-0 top-0 bottom-0 w-2 bg-blue-600"></div>
      <div className="px-20 py-12 h-full flex flex-col">
        <Badge text={slide.badge} />
        <h2 className="text-4xl font-extrabold text-slate-900 leading-tight mb-8">
          {slide.title}
        </h2>

        <div className="flex-1">
          <table className="w-full">
            <tbody>
              {slide.frameworks.map((fw: any, i: number) => (
                <motion.tr
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className={`border-b border-slate-100 ${fw.verdict ? 'bg-blue-50' : ''}`}
                >
                  <td className="py-4 px-4 font-bold text-slate-900 w-64">{fw.framework}</td>
                  <td className="py-4 px-4 text-sm text-slate-600 leading-relaxed">{fw.evidence}</td>
                  <td className="py-4 px-4 text-center w-20">
                    <span className={`text-4xl font-black ${fw.verdict ? 'text-blue-600' : 'text-slate-300'}`}>
                      {fw.verdict ? '✓' : '✗'}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function CostSlide({ slide }: { slide: any }) {
  return (
    <div className="h-full relative">
      <div className="absolute left-0 top-0 bottom-0 w-2 bg-blue-600"></div>
      <div className="px-20 py-12 h-full flex flex-col">
        <Badge text={slide.badge} />
        <h2 className="text-4xl font-extrabold text-slate-900 leading-tight mb-8">
          {slide.title}
        </h2>

        <div className="flex-1 flex items-center">
          <div className="w-full max-w-2xl mx-auto">
            <div className="bg-slate-50 rounded-2xl p-8 space-y-4">
              {slide.costChain.map((line: string, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.15 }}
                  className={`flex items-start gap-3 ${i === slide.costChain.length - 1 ? 'border-t-2 border-slate-300 pt-4 mt-4' : ''}`}
                >
                  {i < slide.costChain.length - 1 && (
                    <span className="text-slate-400 flex-shrink-0 mt-1">→</span>
                  )}
                  <span className={`${i === slide.costChain.length - 1 ? 'text-2xl font-bold text-blue-600' : 'text-base text-slate-700'}`}>
                    {line}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-6 text-sm text-slate-600 bg-blue-100 border border-blue-200 rounded-lg px-6 py-4"
            >
              {slide.context}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BusinessSlide({ slide }: { slide: any }) {
  return (
    <div className="h-full relative">
      <div className="absolute left-0 top-0 bottom-0 w-2 bg-blue-600"></div>
      <div className="px-20 py-12 h-full flex flex-col">
        <Badge text={slide.badge} />
        <h2 className="text-4xl font-extrabold text-slate-900 leading-tight mb-8">
          {slide.title}
        </h2>

        <div className="flex-1">
          <table className="w-full mb-6">
            <thead>
              <tr className="border-b-2 border-slate-200">
                <th className="text-left text-xs font-bold text-slate-500 uppercase tracking-wider pb-3">Scenario</th>
                <th className="text-left text-xs font-bold text-slate-500 uppercase tracking-wider pb-3">Impact</th>
                <th className="text-left text-xs font-bold text-slate-500 uppercase tracking-wider pb-3">Revenue</th>
                <th className="text-left text-xs font-bold text-slate-500 uppercase tracking-wider pb-3">Probability</th>
              </tr>
            </thead>
            <tbody>
              {slide.scenarios.map((scenario: any, i: number) => (
                <motion.tr
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className={`border-b border-slate-100 ${i === 1 ? 'bg-green-50' : ''}`}
                >
                  <td className="py-4 text-sm text-slate-700">{scenario.scenario}</td>
                  <td className="py-4 text-base text-slate-900">{scenario.impact}</td>
                  <td className="py-4 text-lg font-bold text-green-600">{scenario.revenue}</td>
                  <td className="py-4 text-sm text-slate-600">{scenario.probability}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="bg-white border border-blue-200 rounded-lg px-6 py-4 text-sm text-slate-700"
          >
            <strong className="text-blue-600">Risk mitigation:</strong> {slide.risks}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function AskSlide({ slide }: { slide: any }) {
  return (
    <div className="h-full relative">
      <div className="absolute left-0 top-0 bottom-0 w-2 bg-blue-600"></div>
      <div className="px-20 py-12 h-full flex flex-col">
        <Badge text={slide.badge} />
        <h2 className="text-4xl font-extrabold text-slate-900 leading-tight mb-8">
          {slide.title}
        </h2>

        <div className="grid grid-cols-2 gap-10 flex-1">
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8">
            <h3 className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-6">What We Need</h3>
            <div className="space-y-4">
              {slide.asks.map((ask: any, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex gap-3 items-start"
                >
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-base text-slate-700 leading-relaxed">{ask.item}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-6">Timeline</h3>
            <div className="space-y-6">
              {slide.timeline.map((item: any, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                    {i < slide.timeline.length - 1 && <div className="w-0.5 h-12 bg-blue-200 mt-2"></div>}
                  </div>
                  <div className="flex-1 -mt-1">
                    <div className="font-semibold text-slate-900">{item.label}</div>
                    <div className="text-sm text-slate-600 mt-1">{item.detail}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
          className="bg-blue-50 rounded-xl px-8 py-5 text-center text-xl font-bold text-slate-900 mt-6"
        >
          {slide.closing}
        </motion.div>
      </div>
    </div>
  );
}

function Badge({ text }: { text: string }) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="inline-block self-start text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-100 border border-blue-300 px-3 py-1 rounded-full mb-4"
    >
      {text}
    </motion.div>
  );
}