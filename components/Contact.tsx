"use client";

import { motion } from "motion/react";
import { Send } from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";
import { TextField } from "./ui/TextField";
import { Button } from "./ui/Button";

export default function Contact() {
  return (
    <section id="contact" className="py-16 relative border-t border-zinc-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a question or want to work together? Feel free to reach out."
          chip="Contact"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white border border-zinc-200 rounded-3xl p-8 md:p-12 shadow-sm relative max-w-4xl"
        >
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <TextField label="Name" id="name" type="text" placeholder="John Doe" />
              <TextField label="Email" id="email" type="email" placeholder="john@example.com" />
            </div>

            <TextField label="Message" id="message" multiline rows={5} placeholder="How can I help you?" />

            <Button
              type="submit"
              variant="gradient"
              className="w-full md:w-auto mx-auto md:mx-0 shadow-lg"
            >
              <Send size={18} />
              Send Message
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
