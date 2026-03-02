import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useMotionTemplate } from 'motion/react';
import { Mail, ShieldCheck, Zap, TrendingUp, CheckCircle2, ArrowRight, Layers, Star, ChevronDown, Crown } from 'lucide-react';
import { BrowserRouter, Routes, Route, Link, useLocation, useParams } from 'react-router-dom';
import { caseStudiesData } from './data';

const ScrollHandler = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return null;
};

const Navbar = () => {
  const location = useLocation();
  
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', `/#${id}`);
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-neon-purple to-indigo-600 flex items-center justify-center">
            <Mail className="w-5 h-5 text-white absolute mt-2" />
            <Crown className="w-4 h-4 text-yellow-400 absolute -mt-3 fill-yellow-400" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight">LeadsKingdom</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
          <Link to="/#features" onClick={(e) => handleScroll(e, 'features')} className="hover:text-white transition-colors">Features</Link>
          <Link to="/#pricing" onClick={(e) => handleScroll(e, 'pricing')} className="hover:text-white transition-colors">Pricing</Link>
          <Link to="/case-studies" className="hover:text-white transition-colors">Case Studies</Link>
          <Link to="/#faq" onClick={(e) => handleScroll(e, 'faq')} className="hover:text-white transition-colors">FAQ</Link>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/#pricing" onClick={(e) => handleScroll(e, 'pricing')} className="gradient-border px-5 py-2.5 text-sm font-medium hover:scale-105 transition-transform flex items-center gap-2">
            Get Started <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-[#050505]"
      onMouseMove={handleMouseMove}
    >
      {/* Dynamic Spotlight */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(176, 38, 255, 0.15), transparent 80%)`
        }}
      />
      
      {/* High-tech Grid Background */}
      <div className="absolute inset-0 z-0 opacity-[0.04]" 
           style={{ backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)', backgroundSize: '4rem 4rem' }} 
      />
      {/* Fade out grid at edges */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        {/* Tech Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-neon-purple mb-8 backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-purple opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-purple"></span>
          </span>
          One-Click Automated Cold Email Setup
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter text-white mb-6 leading-[1.1]"
        >
          We Build Your Cold <br className="hidden md:block" />
          Email Infrastructure. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple via-purple-400 to-indigo-400 drop-shadow-[0_0_30px_rgba(176,38,255,0.3)]">
            Setup is 100% Free.
          </span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-white/50 mb-10 font-medium"
        >
          You only pay for the mailboxes—no setup fees, no hidden costs. 
          Enterprise-grade deliverability deployed in minutes.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto"
        >
          <a 
            href="#pricing"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
              window.history.pushState(null, '', '/#pricing');
            }}
            className="group relative inline-flex items-center justify-center px-8 py-4 rounded-full bg-neon-purple text-white text-base font-semibold transition-all hover:scale-105 w-full sm:w-auto overflow-hidden shadow-[0_0_40px_rgba(176,38,255,0.3)] hover:shadow-[0_0_60px_rgba(176,38,255,0.5)]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
            <span className="relative flex items-center gap-2">
              Launch Your Infrastructure <Zap className="w-4 h-4" />
            </span>
          </a>
          <a 
            href="#features"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
              window.history.pushState(null, '', '/#features');
            }}
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white text-base font-medium hover:bg-white/10 transition-all w-full sm:w-auto backdrop-blur-md"
          >
            Explore Architecture
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-neon-purple" />,
      title: "Full Technical Setup",
      description: "We handle SPF, DKIM, and DMARC records perfectly. No more technical headaches or misconfigured domains.",
      className: "md:col-span-2"
    },
    {
      icon: <Zap className="w-6 h-6 text-neon-purple" />,
      title: "Automated Warming",
      description: "Built-in, intelligent warming algorithms to ensure your sender reputation stays pristine from day one.",
      className: "md:col-span-1"
    },
    {
      icon: <Layers className="w-6 h-6 text-neon-purple" />,
      title: "One-Click ESP Integration",
      description: "Seamlessly connect with Smartlead, Instantly, and Reachinbox in seconds. We map everything automatically.",
      className: "md:col-span-1"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-neon-purple" />,
      title: "Superior Inbox Placement",
      description: "Our proprietary infrastructure bypasses spam filters better than major providers, landing you in the primary inbox.",
      className: "md:col-span-2"
    }
  ];

  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Everything you need to <span className="text-gradient-purple">dominate the inbox</span></h2>
          <p className="text-white/60 text-lg max-w-2xl">Stop worrying about infrastructure. We've built the ultimate sending engine so you can focus on closing deals.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-obsidian-light border border-white/5 rounded-3xl p-8 glow-card ${feature.className}`}
            >
              <div className="w-12 h-12 rounded-2xl bg-neon-purple/10 border border-neon-purple/20 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">{feature.title}</h3>
              <p className="text-white/60 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      description: "The perfect launchpad for growing teams.",
      mailboxes: "250",
      price: "500",
      popular: false,
      features: [
        "250 Dedicated Mailboxes",
        "Full Technical Setup (SPF/DKIM/DMARC)",
        "Automated Warming Included",
        "Standard Support"
      ]
    },
    {
      name: "Growth",
      description: "For agencies and teams scaling outreach.",
      mailboxes: "500",
      price: "800",
      popular: true,
      features: [
        "500 Dedicated Mailboxes",
        "Full Technical Setup (SPF/DKIM/DMARC)",
        "Automated Warming Included",
        "Priority Support",
        "Dedicated Account Manager"
      ]
    },
    {
      name: "Scale",
      description: "The elite plan for massive volume.",
      mailboxes: "1000",
      price: "1,500",
      popular: false,
      features: [
        "1000 Dedicated Mailboxes",
        "Full Technical Setup (SPF/DKIM/DMARC)",
        "Automated Warming Included",
        "24/7 Slack Support",
        "Custom Sending Architecture"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Simple, transparent pricing</h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">No hidden fees. No complex tiers. Just raw sending power at a fraction of the cost of Google Workspace.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-obsidian-light rounded-3xl p-8 flex flex-col ${
                plan.popular 
                  ? 'border border-neon-purple shadow-[0_0_40px_rgba(176,38,255,0.15)] scale-105 z-10' 
                  : 'border border-white/5'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-neon-purple text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-display font-bold mb-2">{plan.name}</h3>
                <p className="text-white/60 text-sm h-10">{plan.description}</p>
              </div>
              
              <div className="mb-8 pb-8 border-b border-white/5">
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-display font-bold">${plan.price}</span>
                  <span className="text-white/60">/mo</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 text-sm font-medium text-white/80">
                  <Mail className="w-4 h-4 text-neon-purple" />
                  {plan.mailboxes} Mailboxes
                </div>
              </div>
              
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-neon-purple shrink-0" />
                    <span className="text-white/80 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-3.5 rounded-xl font-medium transition-all duration-300 ${
                plan.popular 
                  ? 'bg-neon-purple hover:bg-neon-purple/90 text-white shadow-[0_0_20px_rgba(176,38,255,0.3)] hover:shadow-[0_0_40px_rgba(176,38,255,0.6)]' 
                  : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
              }`}>
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard: React.FC<{ t: { quote: string; name: string; handle: string; avatar: string } }> = ({ t }) => (
  <div className="w-[400px] shrink-0 bg-[#0a0a0a] border border-neon-purple/30 rounded-2xl p-6 glow-card mx-3">
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-neon-purple text-neon-purple" />
      ))}
    </div>
    <p className="text-white text-lg mb-6 leading-relaxed">"{t.quote}"</p>
    <div className="flex items-center gap-3">
      <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" referrerPolicy="no-referrer" />
      <div>
        <div className="text-white font-medium text-sm">{t.name}</div>
        <div className="text-white/40 text-sm">{t.handle}</div>
      </div>
    </div>
  </div>
);

const WallOfLove = () => {
  const testimonials = [
    {
      quote: "1000 mailboxes set up in 24 hours—insane. Our deliverability has never been better.",
      name: "Sarah Jenkins",
      handle: "@sarahj_growth",
      avatar: "https://picsum.photos/seed/sarah/100/100"
    },
    {
      quote: "Switched from Google Workspace and saved $4,000/mo while doubling our open rates.",
      name: "Marcus Chen",
      handle: "@marcus_chen",
      avatar: "https://picsum.photos/seed/marcus/100/100"
    },
    {
      quote: "The one-click Instantly integration is magic. I literally just added leads and hit send.",
      name: "David Miller",
      handle: "@davidm_sales",
      avatar: "https://picsum.photos/seed/david/100/100"
    },
    {
      quote: "Finally, an infrastructure provider that actually understands cold email at scale.",
      name: "Elena Rodriguez",
      handle: "@elena_b2b",
      avatar: "https://picsum.photos/seed/elena/100/100"
    },
    {
      quote: "We were getting shadow-banned weekly. Since switching to InfraMail, 0 issues in 6 months.",
      name: "James Wilson",
      handle: "@jamesw_outbound",
      avatar: "https://picsum.photos/seed/james/100/100"
    },
    {
      quote: "The automated warming alone is worth the price. Everything else is just a massive bonus.",
      name: "Anita Patel",
      handle: "@anita_scales",
      avatar: "https://picsum.photos/seed/anita/100/100"
    }
  ];

  // Duplicate for infinite scroll
  const row1 = [...testimonials, ...testimonials, ...testimonials];
  const row2 = [...testimonials].reverse();
  const row2Extended = [...row2, ...row2, ...row2];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Trusted by top outbound teams</h2>
        <p className="text-white/60 text-lg">Join hundreds of companies scaling their revenue with LeadsKingdom.</p>
      </div>

      <div className="relative mask-edges">
        <div className="flex w-max animate-marquee-left pause-on-hover mb-6">
          {row1.map((t, i) => <TestimonialCard key={`r1-${i}`} t={t} />)}
        </div>
        
        <div className="flex w-max animate-marquee-right pause-on-hover">
          {row2Extended.map((t, i) => <TestimonialCard key={`r2-${i}`} t={t} />)}
        </div>
      </div>
    </section>
  );
};

const CaseStudiesSection = ({ limit, showDetailsButton, showViewAllButton }: { limit?: number, showDetailsButton?: boolean, showViewAllButton?: boolean }) => {
  const displayCases = limit ? caseStudiesData.slice(0, limit) : caseStudiesData;

  return (
    <section id="case-studies" className="py-24 relative overflow-hidden bg-obsidian-light">
      <div className="max-w-7xl mx-auto px-6">
        {!showDetailsButton && (
          <div className="mb-20 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Proven Results</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">See how top teams are using LeadsKingdom to dominate their outbound campaigns.</p>
          </div>
        )}
        
        <div className="space-y-24">
          {displayCases.map((c, i) => {
            const isEven = i % 2 === 0;
            return (
              <div key={i} className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}>
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="w-full md:w-1/2"
                >
                  <div className="relative rounded-2xl overflow-hidden border border-white/10 group">
                    <div className="absolute inset-0 bg-neon-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
                    <img src={c.image} alt={c.company} className="w-full h-[350px] md:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
                    <div className="absolute bottom-6 left-6 z-20 bg-black/60 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10">
                      <span className="font-display font-bold text-white">{c.company}</span>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="w-full md:w-1/2 space-y-6"
                >
                  <h3 className="text-3xl font-display font-bold leading-tight">{c.title}</h3>
                  <p className="text-white/60 text-lg leading-relaxed">{c.description}</p>
                  <div className="space-y-3 pt-4">
                    {c.achievements.map((ach, j) => (
                      <div key={j} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-neon-purple shrink-0" />
                        <span className="text-white/80 font-medium">{ach}</span>
                      </div>
                    ))}
                  </div>
                  {showDetailsButton && (
                    <div className="pt-6">
                      <Link to={`/case-studies/${c.id}`} className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all">
                        View Case Study <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  )}
                </motion.div>
              </div>
            );
          })}
        </div>

        {showViewAllButton && (
          <div className="mt-20 text-center">
            <Link to="/case-studies" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-neon-purple text-white text-base font-semibold transition-all hover:scale-105 shadow-[0_0_30px_rgba(176,38,255,0.3)]">
              View All Case Studies <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    {
      q: "Why not just use Google Workspace or Outlook?",
      a: "Google and Outlook are for \"conversations,\" not mass outbound. They have strict caps and will shadow-ban your primary domain if you send at scale. Our infrastructure is built specifically for high-volume sending with rotating IPs that protect your reputation."
    },
    {
      q: "Do you handle SPF, DKIM, and DMARC?",
      a: "Yes. We handle 100% of the technical DNS setup. We ensure every domain is fully authenticated so you hit the primary inbox, not the \"Promotions\" or \"Spam\" folder."
    },
    {
      q: "How many emails can I send per day?",
      a: "Our infrastructure supports whatever scale you need. However, we recommend a safe \"human-like\" limit of 30-50 emails per mailbox per day. With our 1,000 mailbox plan, that's 50,000 emails daily without risking your domains."
    },
    {
      q: "What is the warmup period?",
      a: "Every mailbox we deliver comes with an automated warmup sequence. We recommend a 14-day lead-in to build \"sender trust\" before you ramp up to full volume."
    },
    {
      q: "Can I integrate with my existing tools?",
      a: "Absolutely. Our mailboxes connect via SMTP/IMAP to any major platform including Instantly, Smartlead, and Reachinbox with a single click."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 relative bg-black">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-purple/10 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-white/60 text-lg">Everything you need to know about our infrastructure.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className="bg-[#0a0a0a] border border-neon-purple/20 rounded-2xl overflow-hidden transition-all duration-300 hover:border-neon-purple/50 hover:shadow-[0_0_20px_rgba(176,38,255,0.1)]"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-6 flex items-center justify-between text-left"
                >
                  <span className="font-display font-semibold text-lg">{faq.q}</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="shrink-0 ml-4"
                  >
                    <ChevronDown className="w-5 h-5 text-neon-purple" />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-white/60 leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="border-t border-white/5 py-12 bg-obsidian">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-2">
        <div className="relative w-6 h-6 rounded-md bg-gradient-to-br from-neon-purple to-indigo-600 flex items-center justify-center">
          <Mail className="w-3.5 h-3.5 text-white absolute mt-1.5" />
          <Crown className="w-3 h-3 text-yellow-400 absolute -mt-2 fill-yellow-400" />
        </div>
        <span className="font-display font-bold tracking-tight">LeadsKingdom</span>
      </div>
      
      <div className="flex items-center gap-6 text-sm text-white/50">
        <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
        <a href="#" className="hover:text-white transition-colors">Terms</a>
        <a href="#" className="hover:text-white transition-colors">Privacy</a>
        <a href="#" className="hover:text-white transition-colors">Contact</a>
      </div>
      
      <p className="text-sm text-white/40">
        © {new Date().getFullYear()} LeadsKingdom. All rights reserved.
      </p>
    </div>
  </footer>
);

const CaseStudiesHub = () => (
  <div className="bg-obsidian pt-32">
    <div className="py-16 text-center px-6">
      <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Customer Success Stories</h1>
      <p className="text-white/60 text-lg max-w-2xl mx-auto">Discover how top outbound teams scale their revenue with LeadsKingdom.</p>
    </div>
    <CaseStudiesSection showDetailsButton={true} />
  </div>
);

const CaseStudyDetail = () => {
  const { id } = useParams();
  const study = caseStudiesData.find(c => c.id === id);
  
  if (!study) {
    return <div className="min-h-screen flex items-center justify-center text-white">Case study not found.</div>;
  }

  return (
    <div className="min-h-screen bg-obsidian text-white pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-6">
        <Link to="/case-studies" className="inline-flex items-center text-neon-purple hover:text-purple-400 font-medium transition-colors mb-12">
          <ArrowRight className="w-4 h-4 mr-2 rotate-180" /> Back to Case Studies
        </Link>
        
        <div className="mb-12">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-white/80 mb-6">
            {study.company}
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-8">{study.title}</h1>
          <img src={study.image} alt={study.company} className="w-full h-[400px] md:h-[500px] object-cover rounded-3xl border border-white/10" referrerPolicy="no-referrer" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-1 space-y-8">
            <div className="bg-obsidian-light border border-white/5 rounded-2xl p-6">
              <h3 className="text-lg font-display font-bold mb-4 text-white">Key Achievements</h3>
              <ul className="space-y-4">
                {study.achievements.map((ach, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-neon-purple shrink-0" />
                    <span className="text-white/70 text-sm">{ach}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-neon-purple/10 border border-neon-purple/20 rounded-2xl p-6 text-center">
              <h3 className="text-lg font-display font-bold mb-2 text-white">Ready for similar results?</h3>
              <p className="text-white/60 text-sm mb-6">Let us build your infrastructure today.</p>
              <Link to="/#pricing" className="inline-block w-full py-3 rounded-xl bg-neon-purple text-white font-medium hover:bg-purple-500 transition-colors">
                Get Started
              </Link>
            </div>
          </div>
          
          <div className="md:col-span-2 space-y-12 text-lg text-white/70 leading-relaxed">
            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">About the Company</h2>
              <p>{study.about}</p>
            </section>
            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">The Problem</h2>
              <p>{study.problem}</p>
            </section>
            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">The Solution</h2>
              <p>{study.solution}</p>
            </section>
            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">The Result</h2>
              <p>{study.result}</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

const LandingPage = () => (
  <div className="bg-obsidian">
    <Hero />
    <Features />
    <Pricing />
    <WallOfLove />
    <CaseStudiesSection limit={5} showViewAllButton={true} />
    <FAQ />
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <ScrollHandler />
      <div className="min-h-screen bg-obsidian text-white selection:bg-neon-purple/30">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/case-studies" element={<CaseStudiesHub />} />
            <Route path="/case-studies/:id" element={<CaseStudyDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
