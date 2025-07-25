import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export default function FAQSection() {
  const faqs = [
    {
      question: "What exactly is AI SEO optimization?",
      answer: "AI SEO optimization is the process of making your brand and content more discoverable to AI models like ChatGPT, Claude, and Gemini. While traditional SEO focuses on search engines, AI optimization ensures your brand appears in AI-generated recommendations and responses."
    },
    {
      question: "How is this different from traditional SEO?",
      answer: "Traditional SEO targets search engine algorithms, while AI optimization targets Large Language Models (LLMs). AI models are trained on different data sources (Reddit, Quora, YouTube transcripts, Twitter) and use different ranking factors. Geora helps you optimize for both."
    },
    {
      question: "Which AI models does Geora track?",
      answer: "We track visibility across all major AI models including ChatGPT (GPT-3.5 and GPT-4), Claude (Anthropic), Gemini (Google), Perplexity, and other emerging LLMs. Our platform continuously adds support for new models as they gain adoption."
    },
    {
      question: "How quickly will I see results?",
      answer: "Most clients see initial improvements in AI visibility within 2-4 weeks. Significant improvements typically occur within 60-90 days as our optimizations take effect across various platforms and training data sources."
    },
    {
      question: "What kind of businesses benefit most from Geora?",
      answer: "Any business that wants to be recommended by AI benefits from Geora. This includes SaaS companies, agencies, consultants, e-commerce brands, and service providers. Companies with strong expertise or thought leadership see particularly strong results."
    },
    {
      question: "Do you guarantee specific results?",
      answer: "While we can't guarantee specific rankings (AI models are constantly evolving), we do guarantee measurable improvements in AI visibility scores. Our Enterprise clients receive SLA guarantees with specific performance commitments."
    },
    {
      question: "How does the content rewriting feature work?",
      answer: "Similar to Grammarly, our AI scans your content in real-time and suggests optimizations for AI discovery. This includes keyword placement, structure improvements, and phrasing that resonates better with AI training patterns."
    },
    {
      question: "Is my data secure?",
      answer: "Yes, we take security seriously. All data is encrypted in transit and at rest. We're SOC 2 compliant and never share your proprietary information. You maintain full ownership of your content and data."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Absolutely. All plans are month-to-month with no long-term commitments. You can upgrade, downgrade, or cancel at any time through your dashboard. Enterprise clients have custom terms."
    },
    {
      question: "Do you offer API access?",
      answer: "Yes, our Professional and Enterprise plans include API access so you can integrate Geora's AI visibility data into your existing tools and workflows. Full documentation is available for developers."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            Frequently Asked{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Everything you need to know about AI optimization and how Geora works
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg px-6 transition-all duration-300 hover:border-primary/20 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <AccordionTrigger className="text-left py-6 hover:text-primary transition-colors duration-200">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Still have questions? We're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="demo" size="lg">
              Schedule a Demo
            </Button>
            <Button variant="hero" size="lg">
              Contact Support
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}