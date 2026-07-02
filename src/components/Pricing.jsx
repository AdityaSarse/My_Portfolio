import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState('monthly') // 'monthly' or 'annual'

  const plans = [
    {
      name: 'Basic Plan',
      price: billingPeriod === 'monthly' ? '$999' : '$799',
      period: '/ month',
      description: 'Perfect for small projects, landing pages, and startups needing quick design implementation.',
      features: [
        'UI/UX Design',
        'Framer Development',
        '1 revision at a time',
        'Delivery in 5-7 days',
        'Email Support'
      ],
      cta: 'Get Started',
      featured: false
    },
    {
      name: 'Advanced Plan',
      price: billingPeriod === 'monthly' ? '$1,599' : '$1,299',
      period: '/ month',
      description: 'Ideal for scaling businesses needing complete product design, custom conversion, and priority support.',
      features: [
        'Product Design',
        'Framer Conversion',
        'Unlimited revisions',
        'Delivery in 3-5 days',
        '24/7 Slack Support',
        'Source Files Included'
      ],
      cta: 'Subscribe Now',
      featured: true
    }
  ]

  return (
    <section id="pricing" className="w-full flex flex-col border-b border-border-main bg-bg-card">
      {/* Section Header */}
      <div className="w-full border-b border-border-main py-4 text-center bg-bg-main">
        <h2 className="font-bold text-[10px] tracking-widest uppercase text-text-heading">
          Pricing
        </h2>
      </div>

      {/* Tab Switcher for Monthly / Annual */}
      <div className="flex flex-col items-center py-10 border-b border-dashed border-border-main bg-bg-main/5">
        <div className="flex items-center border border-border-main p-1.5 bg-bg-card gap-1">
          <button
            onClick={() => setBillingPeriod('monthly')}
            className={`px-4 py-2 text-[10px] font-bold tracking-widest uppercase rounded-none transition-all cursor-pointer
              ${billingPeriod === 'monthly' ? 'bg-text-heading text-bg-card' : 'text-text-main hover:text-text-heading'}
            `}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingPeriod('annual')}
            className={`px-4 py-2 text-[10px] font-bold tracking-widest uppercase rounded-none transition-all cursor-pointer flex items-center gap-1.5
              ${billingPeriod === 'annual' ? 'bg-text-heading text-bg-card' : 'text-text-main hover:text-text-heading'}
            `}
          >
            Annual
            <span className="text-[8px] bg-emerald-500/10 text-emerald-500 px-1.5 py-0.5 font-extrabold uppercase">Save 20%</span>
          </button>
        </div>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {plans.map((plan, idx) => (
          <div
            key={plan.name}
            className={`p-8 md:p-14 flex flex-col justify-between text-left gap-8 hover:bg-zinc-50/50 dark:hover:bg-zinc-950/10 transition-all duration-300
              ${idx === 0 ? 'border-b md:border-b-0 md:border-r border-border-main' : ''}
              ${plan.featured ? 'bg-zinc-50/20 dark:bg-zinc-950/5' : ''}
            `}
          >
            <div>
              <div className="flex justify-between items-baseline mb-4">
                <h3 className="text-2xl font-display font-extrabold text-text-heading">
                  {plan.name}
                </h3>
                {plan.featured && (
                  <span className="text-[9px] font-bold uppercase tracking-widest bg-text-heading text-bg-card px-2.5 py-1">
                    Popular
                  </span>
                )}
              </div>
              
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl md:text-5xl font-display font-extrabold text-text-heading tracking-tight">
                  {plan.price}
                </span>
                <span className="text-xs text-text-main font-semibold">
                  {plan.period}
                </span>
              </div>

              <p className="text-sm text-text-main leading-relaxed font-medium mb-8">
                {plan.description}
              </p>

              <div className="border-t border-dashed border-border-main pt-8">
                <h4 className="text-[10px] font-bold tracking-widest uppercase text-text-heading mb-6">
                  What's Included
                </h4>
                <ul className="flex flex-col gap-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-text-main font-medium">
                      <div className="flex-shrink-0 w-5 h-5 border border-border-main bg-bg-main flex items-center justify-center text-text-heading">
                        <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <button
              className={`w-full py-4 rounded-none font-bold text-[10px] tracking-widest uppercase transition-all mt-10 cursor-pointer
                ${plan.featured
                  ? 'bg-text-heading text-bg-card hover:bg-text-heading/90 active:scale-[0.98]'
                  : 'border border-border-main text-text-heading hover:bg-bg-main active:scale-[0.98]'
                }
              `}
            >
              {plan.cta}
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
