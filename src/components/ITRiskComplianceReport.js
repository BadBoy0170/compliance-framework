"use client";

import React, { useState } from 'react';
import { Shield, FileText, AlertTriangle, CheckCircle, TrendingUp, Award, Users, Lock } from 'lucide-react';

const ITRiskComplianceReport = () => {
  const [activeTab, setActiveTab] = useState('executive');

  const renderExecutiveSummary = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border-l-4 border-blue-600">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Executive Summary</h2>
        <p className="text-gray-700 mb-4">
          This comprehensive analysis evaluated three leading IT governance frameworks—ISO 27001, NIST Cybersecurity Framework, 
          and COBIT 2019—to determine optimal risk management strategies for a mid-sized financial services organization 
          processing sensitive customer data across hybrid cloud infrastructure.
        </p>
        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-blue-600">3</div>
            <div className="text-sm text-gray-600">Frameworks Analyzed</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-red-600">24</div>
            <div className="text-sm text-gray-600">Critical Risks Identified</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-green-600">92%</div>
            <div className="text-sm text-gray-600">Risk Coverage Score</div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          <Award className="mr-2 text-yellow-600" size={24} />
          Key Findings & Recommendations
        </h3>
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
            <div>
              <p className="font-semibold text-gray-900">Hybrid Framework Approach Recommended</p>
              <p className="text-gray-600 text-sm">ISO 27001 for certification requirements combined with NIST CSF for operational security controls provides optimal coverage for the organization's risk profile.</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <AlertTriangle className="text-amber-600 mt-1 flex-shrink-0" size={20} />
            <div>
              <p className="font-semibold text-gray-900">Critical Gaps in Cloud Security Governance</p>
              <p className="text-gray-600 text-sm">Current controls inadequately address multi-cloud data residency and third-party vendor risk management, exposing the organization to compliance violations.</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <TrendingUp className="text-blue-600 mt-1 flex-shrink-0" size={20} />
            <div>
              <p className="font-semibold text-gray-900">ROI-Positive Implementation Path</p>
              <p className="text-gray-600 text-sm">Phased implementation over 18 months with estimated $2.4M investment yielding $4.8M in risk mitigation value and regulatory penalty avoidance.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderFrameworkComparison = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Framework Comparative Analysis</h2>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="px-6 py-3 text-left">Criteria</th>
              <th className="px-6 py-3 text-left">ISO 27001</th>
              <th className="px-6 py-3 text-left">NIST CSF</th>
              <th className="px-6 py-3 text-left">COBIT 2019</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 font-semibold">Primary Focus</td>
              <td className="px-6 py-4">Information Security Management</td>
              <td className="px-6 py-4">Cybersecurity Risk Management</td>
              <td className="px-6 py-4">IT Governance & Management</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 font-semibold">Certification Available</td>
              <td className="px-6 py-4"><span className="text-green-600 font-bold">Yes</span></td>
              <td className="px-6 py-4"><span className="text-red-600">No</span></td>
              <td className="px-6 py-4"><span className="text-red-600">No</span></td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 font-semibold">Implementation Complexity</td>
              <td className="px-6 py-4">High (12-18 months)</td>
              <td className="px-6 py-4">Moderate (6-9 months)</td>
              <td className="px-6 py-4">High (15-24 months)</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 font-semibold">Industry Adoption</td>
              <td className="px-6 py-4">Global (27,000+ certs)</td>
              <td className="px-6 py-4">US-dominant</td>
              <td className="px-6 py-4">Enterprise-focused</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 font-semibold">Cloud-Native Controls</td>
              <td className="px-6 py-4"><span className="text-amber-600">Moderate</span></td>
              <td className="px-6 py-4"><span className="text-green-600">Strong</span></td>
              <td className="px-6 py-4"><span className="text-amber-600">Moderate</span></td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 font-semibold">Cost (Est.)</td>
              <td className="px-6 py-4">$150K-$300K</td>
              <td className="px-6 py-4">$80K-$150K</td>
              <td className="px-6 py-4">$200K-$400K</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <div className="flex items-center mb-3">
            <Lock className="text-blue-600 mr-2" size={24} />
            <h3 className="font-bold text-gray-900">ISO 27001</h3>
          </div>
          <div className="text-sm text-gray-700 space-y-2">
            <p><strong>Best For:</strong> Organizations requiring third-party certification and regulatory compliance demonstration</p>
            <p><strong>Strength:</strong> Comprehensive ISMS with 114 controls across 14 domains</p>
            <p><strong>Limitation:</strong> Less prescriptive on technical implementation details</p>
          </div>
        </div>

        <div className="bg-green-50 p-6 rounded-lg border border-green-200">
          <div className="flex items-center mb-3">
            <Shield className="text-green-600 mr-2" size={24} />
            <h3 className="font-bold text-gray-900">NIST CSF</h3>
          </div>
          <div className="text-sm text-gray-700 space-y-2">
            <p><strong>Best For:</strong> Flexible, risk-based cybersecurity programs with operational focus</p>
            <p><strong>Strength:</strong> Five core functions provide clear action framework (Identify, Protect, Detect, Respond, Recover)</p>
            <p><strong>Limitation:</strong> No formal certification process</p>
          </div>
        </div>

        <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
          <div className="flex items-center mb-3">
            <Users className="text-purple-600 mr-2" size={24} />
            <h3 className="font-bold text-gray-900">COBIT 2019</h3>
          </div>
          <div className="text-sm text-gray-700 space-y-2">
            <p><strong>Best For:</strong> Enterprise governance aligning IT with business objectives</p>
            <p><strong>Strength:</strong> 40 governance and management objectives with comprehensive maturity models</p>
            <p><strong>Limitation:</strong> Heavy documentation overhead for smaller organizations</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderRiskAssessment = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Risk Assessment Matrix</h2>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Top 10 Critical Risks by Business Impact</h3>
        <div className="space-y-3">
          {[
            { id: 'R-001', risk: 'Inadequate Cloud Data Encryption', impact: 'Critical', likelihood: 'High', score: 9.5, framework: 'ISO 27001 A.10' },
            { id: 'R-002', risk: 'Third-Party Vendor Access Controls', impact: 'Critical', likelihood: 'High', score: 9.2, framework: 'NIST PR.AC-4' },
            { id: 'R-003', risk: 'Multi-Cloud Data Residency Compliance', impact: 'Critical', likelihood: 'Medium', score: 8.8, framework: 'ISO 27001 A.18' },
            { id: 'R-004', risk: 'Incident Response Plan Gaps', impact: 'High', likelihood: 'High', score: 8.5, framework: 'NIST RS.RP-1' },
            { id: 'R-005', risk: 'Privileged Access Management', impact: 'High', likelihood: 'High', score: 8.3, framework: 'COBIT APO13' },
            { id: 'R-006', risk: 'Business Continuity Testing Frequency', impact: 'High', likelihood: 'Medium', score: 7.8, framework: 'ISO 27001 A.17' },
            { id: 'R-007', risk: 'Security Awareness Training Coverage', impact: 'High', likelihood: 'Medium', score: 7.5, framework: 'NIST PR.AT-1' },
            { id: 'R-008', risk: 'API Security Authentication Weaknesses', impact: 'High', likelihood: 'Medium', score: 7.2, framework: 'NIST PR.AC-7' },
            { id: 'R-009', risk: 'Audit Log Retention & Monitoring', impact: 'Medium', likelihood: 'High', score: 6.9, framework: 'ISO 27001 A.12' },
            { id: 'R-010', risk: 'Change Management Process Compliance', impact: 'Medium', likelihood: 'High', score: 6.7, framework: 'COBIT BAI06' }
          ].map((item, idx) => (
            <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
              <div className="flex items-center space-x-4 flex-1">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white ${
                  item.score >= 9 ? 'bg-red-600' : item.score >= 8 ? 'bg-orange-600' : 'bg-yellow-600'
                }`}>
                  {item.score}
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-900">{item.id}: {item.risk}</div>
                  <div className="text-sm text-gray-600">Control Framework: {item.framework}</div>
                </div>
              </div>
              <div className="flex space-x-3">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  item.impact === 'Critical' ? 'bg-red-100 text-red-800' : 'bg-orange-100 text-orange-800'
                }`}>
                  {item.impact}
                </span>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  item.likelihood === 'High' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {item.likelihood}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Risk Distribution by Category</h3>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm text-gray-600">Access Control</span>
                <span className="text-sm font-semibold">32%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-red-600 h-2 rounded-full" style={{width: '32%'}}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm text-gray-600">Data Protection</span>
                <span className="text-sm font-semibold">28%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-orange-600 h-2 rounded-full" style={{width: '28%'}}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm text-gray-600">Compliance & Governance</span>
                <span className="text-sm font-semibold">22%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-yellow-600 h-2 rounded-full" style={{width: '22%'}}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm text-gray-600">Operational Resilience</span>
                <span className="text-sm font-semibold">18%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{width: '18%'}}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Financial Impact Estimate</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-red-600 pl-4">
              <div className="text-sm text-gray-600">Potential Loss (Worst Case)</div>
              <div className="text-2xl font-bold text-red-600">$8.7M</div>
              <div className="text-xs text-gray-500">Including regulatory fines, breach costs, business disruption</div>
            </div>
            <div className="border-l-4 border-green-600 pl-4">
              <div className="text-sm text-gray-600">Risk Mitigation Value</div>
              <div className="text-2xl font-bold text-green-600">$4.8M</div>
              <div className="text-xs text-gray-500">Through implementation of recommended controls</div>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <div className="text-sm text-gray-600">Implementation Cost</div>
              <div className="text-2xl font-bold text-blue-600">$2.4M</div>
              <div className="text-xs text-gray-500">18-month phased rollout with external consulting</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderRecommendations = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Strategic Recommendations & Implementation Roadmap</h2>
      
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold mb-3">Recommended Approach: Hybrid Framework Strategy</h3>
        <p className="mb-4">
          Implement ISO 27001 as the foundational ISMS for certification and compliance requirements, 
          augmented with NIST CSF operational controls for enhanced cybersecurity capabilities, 
          and selective COBIT governance processes for IT-business alignment.
        </p>
        <div className="bg-white bg-opacity-20 rounded p-4">
          <p className="font-semibold mb-2">Expected Outcomes:</p>
          <ul className="space-y-1 text-sm">
            <li>✓ ISO 27001 certification achieved within 18 months</li>
            <li>✓ 85% reduction in critical security gaps</li>
            <li>✓ Enhanced regulatory compliance posture (GDPR, PCI-DSS, SOC 2)</li>
            <li>✓ Improved customer trust and competitive positioning</li>
          </ul>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold text-gray-900 mb-4">18-Month Implementation Roadmap</h3>
        <div className="space-y-4">
          <div className="border-l-4 border-blue-600 pl-4 py-2">
            <div className="font-bold text-gray-900">Phase 1: Foundation (Months 1-6)</div>
            <ul className="mt-2 space-y-1 text-sm text-gray-700">
              <li>• Establish governance structure and steering committee</li>
              <li>• Complete comprehensive gap analysis against ISO 27001 controls</li>
              <li>• Develop Information Security Policy framework and RACI matrix</li>
              <li>• Deploy identity and access management (IAM) solutions</li>
              <li>• Implement centralized logging and SIEM platform</li>
              <li><strong>Investment:</strong> $850K | <strong>Risk Reduction:</strong> 25%</li>
            </ul>
          </div>

          <div className="border-l-4 border-green-600 pl-4 py-2">
            <div className="font-bold text-gray-900">Phase 2: Control Implementation (Months 7-12)</div>
            <ul className="mt-2 space-y-1 text-sm text-gray-700">
              <li>• Deploy encryption solutions for data at rest and in transit</li>
              <li>• Implement DLP (Data Loss Prevention) and CASB for cloud security</li>
              <li>• Establish incident response team and playbooks</li>
              <li>• Conduct security awareness training across organization</li>
              <li>• Perform vendor risk assessments and establish third-party controls</li>
              <li><strong>Investment:</strong> $950K | <strong>Risk Reduction:</strong> 45% (cumulative 70%)</li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-600 pl-4 py-2">
            <div className="font-bold text-gray-900">Phase 3: Certification & Optimization (Months 13-18)</div>
            <ul className="mt-2 space-y-1 text-sm text-gray-700">
              <li>• Conduct internal ISO 27001 audit and remediate findings</li>
              <li>• Engage certification body for external audit</li>
              <li>• Implement continuous monitoring and improvement processes</li>
              <li>• Establish metrics and KPI dashboards for risk reporting</li>
              <li>• Complete business continuity and disaster recovery testing</li>
              <li><strong>Investment:</strong> $600K | <strong>Risk Reduction:</strong> 22% (cumulative 92%)</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-green-50 p-6 rounded-lg border-2 border-green-600">
          <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
            <CheckCircle className="mr-2 text-green-600" />
            Quick Wins (0-3 Months)
          </h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start">
              <span className="text-green-600 mr-2">•</span>
              <span>Enable MFA for all cloud services and privileged accounts</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">•</span>
              <span>Conduct phishing simulation and mandatory security training</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">•</span>
              <span>Implement automated vulnerability scanning and patch management</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">•</span>
              <span>Establish incident response communication channels</span>
            </li>
          </ul>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-600">
          <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
            <TrendingUp className="mr-2 text-blue-600" />
            Success Metrics & KPIs
          </h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Mean Time to Detect (MTTD): Target &lt; 15 minutes</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Mean Time to Respond (MTTR): Target &lt; 4 hours</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Control Effectiveness: 90%+ automation rate</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Audit Findings: Zero critical, &lt;5 high-risk gaps</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );

  const tabStyle = (isActive) => `px-6 py-3 font-semibold border-b-2 transition-colors ${
    isActive 
      ? 'border-blue-600 text-blue-600' 
      : 'border-transparent text-gray-600 hover:text-gray-900'
  }`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white rounded-t-lg p-8 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2">IT Risk & Compliance Framework Analysis</h1>
              <p className="text-blue-200 text-lg">Comprehensive Advisory Report for Financial Services Organization</p>
              <div className="mt-4 flex items-center space-x-4 text-sm">
                <div className="flex items-center">
                  <FileText size={16} className="mr-2" />
                  <span>Academic Project</span>
                </div>
                <div className="flex items-center">
                  <Shield size={16} className="mr-2" />
                  <span>May 2025</span>
                </div>
              </div>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold">A+</div>
              <div className="text-sm">Project Grade</div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white border-b flex space-x-1 shadow-sm">
          <button onClick={() => setActiveTab('executive')} className={tabStyle(activeTab === 'executive')}>
            Executive Summary
          </button>
          <button onClick={() => setActiveTab('framework')} className={tabStyle(activeTab === 'framework')}>
            Framework Analysis
          </button>
          <button onClick={() => setActiveTab('risk')} className={tabStyle(activeTab === 'risk')}>
            Risk Assessment
          </button>
          <button onClick={() => setActiveTab('recommendations')} className={tabStyle(activeTab === 'recommendations')}>
            Recommendations
          </button>
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-b-lg shadow-lg p-8">
          {activeTab === 'executive' && renderExecutiveSummary()}
          {activeTab === 'framework' && renderFrameworkComparison()}
          {activeTab === 'risk' && renderRiskAssessment()}
          {activeTab === 'recommendations' && renderRecommendations()}
        </div>

        {/* Footer */}
        <div className="mt-6 bg-gray-800 text-white rounded-lg p-6 text-center text-sm">
          <p className="mb-2">
            <strong>Prepared By:</strong> Kunal Ranjan | <strong>Institution:</strong> SRM Institute of Science and Technology
          </p>
          <p className="text-gray-400">
            This analysis demonstrates comprehensive understanding of IT governance frameworks, risk assessment methodologies, 
            and strategic advisory capabilities for enterprise security programs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ITRiskComplianceReport;