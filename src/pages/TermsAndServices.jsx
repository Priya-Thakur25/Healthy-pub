import React from 'react';

export default function TermsAndServices() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-green-600">Terms of Service & Business Practices</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-semibold mb-4">1. Introduction</h2>
          <p className="text-gray-500 mb-4">
            Welcome to Healthy Pub. These Terms of Service govern your use of our website and services as both a retailer and wholesaler of fitness and nutritional supplements. By accessing or using our website, you agree to be bound by these Terms. Please read them carefully.
          </p>
          <p className="text-gray-500">
            We operate as both a B2B wholesale distributor and B2C retailer, offering products through our online platform and physical stores. Our services include bulk ordering for businesses, subscription plans, and standard retail purchases.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">2. Service Models</h2>
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-600">2.1 Wholesale Services</h3>
            <ul className="list-disc pl-6 text-gray-500 space-y-2">
              <li>Minimum order value of ₹10,000 for wholesale accounts</li>
              <li>Volume-based pricing tiers available for qualified businesses</li>
              <li>Business registration required for wholesale pricing</li>
              <li>Custom shipping arrangements available for bulk orders</li>
            </ul>

            <h3 className="font-semibold text-gray-600">2.2 Retail Services</h3>
            <ul className="list-disc pl-6 text-gray-500 space-y-2">
              <li>Single-unit purchases with standard pricing</li>
              <li>Subscription options for regular deliveries</li>
              <li>Express shipping available for retail customers</li>
              <li>Loyalty program for repeat customers</li>
            </ul>
          </div>
        </section>

        {/* Existing Definitions section remains here */}

        <section>
          <h2 className="text-xl font-semibold mb-4">3. Order Processing</h2>
          <div className="space-y-4">
            <p className="text-gray-500">
              3.1. Processing Times:
              <ul className="list-disc pl-6 mt-2">
                <li>Retail orders: Processed within 1-2 business days</li>
                <li>Wholesale orders: Processed within 3-5 business days</li>
                <li>Custom formulations: 7-10 business days processing</li>
              </ul>
            </p>
            
            <p className="text-gray-500">
              3.2. Service Commitments:
              <ul className="list-disc pl-6 mt-2">
                <li>24/7 order tracking for all shipments</li>
                <li>Dedicated account managers for wholesale clients</li>
                <li>Price-match guarantee for authorized retailers</li>
              </ul>
            </p>
          </div>
        </section>

        {/* Updated Payments section */}
        <section>
          <h2 className="text-xl font-semibold mb-4">4. Payments & Pricing Structure</h2>
          <p className="text-gray-500 mb-4">
            4.1. Pricing Tiers:
            <ul className="list-disc pl-6 mt-2">
              <li>Retail: Standard MRP pricing</li>
              <li>Wholesale: 15-40% discount based on volume</li>
              <li>Subscription: 5-15% discount based on commitment period</li>
            </ul>
          </p>
          
          <p className="text-gray-500 mb-4">
            4.2. Payment Terms:
            <ul className="list-disc pl-6 mt-2">
              <li>Retail: Full payment upfront</li>
              <li>Wholesale: 50% advance for first-time clients, NET 30 terms for established accounts</li>
              <li>International Orders: 100% advance payment required</li>
            </ul>
          </p>
        </section>

        {/* Enhanced Returns section */}
        <section>
          <h2 className="text-xl font-semibold mb-4">5. Returns & Quality Assurance</h2>
          <p className="text-gray-500 mb-4">
            5.1. Quality Checks:
            <ul className="list-disc pl-6 mt-2">
              <li>Batch testing documentation available upon request</li>
              <li>Third-party lab reports for wholesale clients</li>
              <li>Immediate recall process for compromised products</li>
            </ul>
          </p>
          
          <p className="text-gray-500">
            5.2. Return Exceptions:
            <ul className="list-disc pl-6 mt-2">
              <li>Custom orders and special formulations are final sale</li>
              <li>Temperature-sensitive products require special return authorization</li>
              <li>Damaged shipments must be reported within 24 hours</li>
            </ul>
          </p>
        </section>

        {/* Added Service Specifics section */}
        <section>
          <h2 className="text-xl font-semibold mb-4">6. Service Specifications</h2>
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-800">6.1 Fulfillment Services</h3>
            <ul className="list-disc pl-6 text-gray-500 space-y-2">
              <li>Private label options for wholesale clients</li>
              <li>Drop-shipping available for qualified retailers</li>
              <li>Custom packaging services</li>
            </ul>

            <h3 className="font-semibold text-gray-800">6.2 Customer Support</h3>
            <ul className="list-disc pl-6 text-gray-500 space-y-2">
              <li>Wholesale: Dedicated support line (Mon-Sat 9AM-7PM IST)</li>
              <li>Retail: Email/ticket support with 24-hour response time</li>
              <li>Emergency recall hotline: +91 87553-72900</li>
            </ul>
          </div>
        </section>

        {/* Existing sections (Health Disclaimer, Liability, etc.) follow here */}

        <section>
          <h2 className="text-xl font-semibold mb-4">12. Service Modifications</h2>
          <p className="text-gray-500 mb-4">
            We reserve the right to:
            <ul className="list-disc pl-6 mt-2">
              <li>Modify service offerings and fulfillment methods</li>
              <li>Adjust wholesale/retail pricing structures</li>
              <li>Discontinue products or services without notice</li>
              <li>Change supported payment methods or carriers</li>
            </ul>
          </p>
        </section>

        {/* Keep existing Legal sections (Governing Law, Contact Info, etc.) */}

        <p className="text-gray-500 mt-8">
          Last Updated: March 16, 2025
        </p>
      </div>
    </div>
  );
}