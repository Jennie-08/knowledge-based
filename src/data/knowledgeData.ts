export interface Article {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    category: string;
    categorySlug: string;
    tags: string[];
    readingTime: string;
    lastUpdated: string;
    headings?: { id: string; title: string; level: number }[];
    videoUrl?: string;  // ✅ Add this
  thumbnailUrl?: string; // ✅ Add this
  videoDuration?: string; // Optional, if you use it
  }
  
  export interface Category {
    id: string;
    title: string;
    slug: string;
    description: string;
    icon: string;
  }
  
  export const categories: Category[] = [
    {
      id: "introduction",
      title: "Introduction & Getting Started",
      slug: "introduction",
      description: "Learn the basics of the NCTV Dashboard and get up and running quickly.",
      icon: "BookOpen",
    },
    {
      id: "using-dashboard",
      title: "Using the Dashboard",
      slug: "using-dashboard",
      description: "Detailed guides on how to use all features of the NCTV Dashboard effectively.",
      icon: "LayoutDashboard",
    },
    {
      id: "troubleshooting",
      title: "Troubleshooting & FAQs",
      slug: "troubleshooting",
      description: "Solutions for common issues and answers to frequently asked questions.",
      icon: "HelpCircle",
    },
    {
      id: "community",
      title: "Community & Help Resources",
      slug: "community",
      description: "Find additional support through our community and help resources.",
      icon: "Users",
    },
    {
      id: "updates",
      title: "Updates & Best Practices",
      slug: "updates",
      description: "Stay informed about new features and learn best practices for campaign optimization.",
      icon: "RefreshCw",
    },
  ];
  
  export const articles: Article[] = [
    {
      id: "welcome-to-nctv-dashboard",
      title: "Welcome to the NCTV Dashboard",
      slug: "welcome-to-nctv-dashboard",
      excerpt: "A brief introduction explaining what the dashboard is, who it's for, and how it benefits users.",
      content: `
        ## Welcome to the NCTV Dashboard
        
        The NCTV Dashboard is a comprehensive tool designed to help media professionals manage and optimize their advertising campaigns. Whether you're a small business owner or part of a large marketing team, our dashboard provides all the tools you need to create, manage, and track effective ad campaigns.
        
        ### Who is it for?
        
        - **Advertisers**: Create and manage ad campaigns across multiple platforms
        - **Media Planners**: Plan and allocate advertising budgets effectively
        - **Campaign Managers**: Track performance and make data-driven decisions
        - **Business Owners**: Get a clear overview of your advertising ROI
        
        ### Key Benefits
        
        - **Centralized Management**: Manage all your campaigns from one place
        - **Real-time Analytics**: Get instant insights into campaign performance
        - **Cost Efficiency**: Optimize your ad spend for better results
        - **Time Saving**: Streamline workflows and automate repetitive tasks
        
        ### Getting Started
        
        To get the most out of the NCTV Dashboard, we recommend starting with the following steps:
        
        1. Complete your account setup
        2. Explore the dashboard interface
        3. Create your first campaign
        4. Review the analytics tools
        
        For more detailed instructions, please refer to our other guides in the Getting Started section.
      `,
      category: "Introduction & Getting Started",
      categorySlug: "introduction",
      tags: ["getting started", "overview", "introduction"],
      readingTime: "3 min read",
      lastUpdated: "2023-10-15",
      headings: [
        { id: "welcome-to-the-nctv-dashboard", title: "Welcome to the NCTV Dashboard", level: 2 },
        { id: "who-is-it-for", title: "Who is it for?", level: 3 },
        { id: "key-benefits", title: "Key Benefits", level: 3 },
        { id: "getting-started", title: "Getting Started", level: 3 },
      ],
    },
    {
      id: "how-to-navigate-dashboard",
      title: "How to Navigate the Dashboard",
      slug: "how-to-navigate-dashboard",
      excerpt: "Overview of the main menu, sections, and how to find key features.",
      content: `
        ## How to Navigate the Dashboard
        
        The NCTV Dashboard is designed with user-friendly navigation to help you access all features quickly and efficiently. This guide will walk you through the main sections and navigation elements.
        
        ### Main Navigation Menu
        
        The main navigation menu is located on the left side of the screen and provides access to all primary sections:
        
        - **Home**: Dashboard overview and recent activity
        - **Campaigns**: Create and manage your advertising campaigns
        - **Analytics**: In-depth reporting and performance metrics
        - **Audience**: Audience targeting and segment management
        - **Billing**: Payment methods, invoices, and account balance
        - **Settings**: Account preferences and user management
        
        ### Top Bar Navigation
        
        The top bar contains:
        
        - **Search**: Quickly find campaigns, reports, or settings
        - **Notifications**: System alerts and important updates
        - **User Profile**: Access your account settings and logout
        - **Help**: Access this knowledge base and support options
        
        ### Campaign Dashboard
        
        When you enter the Campaigns section, you'll find:
        
        - **Campaign List**: Overview of all your campaigns
        - **Campaign Status**: Active, paused, or completed indicators
        - **Performance Summary**: Key metrics for each campaign
        - **Action Buttons**: Quick access to edit, duplicate, or pause campaigns
        
        ### Tips for Efficient Navigation
        
        - Use the search function to quickly find specific items
        - Bookmark frequently accessed pages using your browser
        - Use keyboard shortcuts (press '?' to view available shortcuts)
        - Customize your dashboard layout in the Settings section
        
        Understanding the navigation structure will help you work more efficiently and take full advantage of all dashboard features.
      `,
      category: "Introduction & Getting Started",
      categorySlug: "introduction",
      tags: ["navigation", "interface", "menu"],
      readingTime: "4 min read",
      lastUpdated: "2023-11-02",
      headings: [
        { id: "how-to-navigate-the-dashboard", title: "How to Navigate the Dashboard", level: 2 },
        { id: "main-navigation-menu", title: "Main Navigation Menu", level: 3 },
        { id: "top-bar-navigation", title: "Top Bar Navigation", level: 3 },
        { id: "campaign-dashboard", title: "Campaign Dashboard", level: 3 },
        { id: "tips-for-efficient-navigation", title: "Tips for Efficient Navigation", level: 3 },
      ],
    },
    {
      id: "setting-up-your-account",
      title: "Setting Up Your Account",
      slug: "setting-up-your-account",
      excerpt: "Step-by-step guide on logging in, updating profile details, setting preferences, and managing security settings.",
      content: `
        ## Setting Up Your Account
        
        Properly setting up your NCTV Dashboard account is essential for a smooth experience. Follow these steps to ensure your account is configured correctly.
        
        ### Initial Login Process
        
        1. Use the credentials provided in your welcome email
        2. You'll be prompted to change your password on first login
        3. Choose a strong password with at least 8 characters, including numbers and symbols
        4. Set up two-factor authentication for additional security
        
        ### Completing Your Profile
        
        Navigate to the Profile section from the dropdown menu under your username to:
        
        - Upload a profile picture
        - Update your contact information
        - Set your time zone for accurate reporting
        - Configure notification preferences
        
        ### User Preferences
        
        In the Settings section, you can customize your dashboard experience:
        
        - Select your preferred date format
        - Choose between light and dark mode
        - Set default currency for financial reporting
        - Configure auto-refresh intervals for real-time data
        
        ### Security Settings
        
        Protect your account by configuring these security options:
        
        - Enable/disable two-factor authentication
        - Manage active sessions
        - Set up IP restrictions for account access
        - Configure password expiration policies
        
        ### Team Access (Admin Only)
        
        If you're an account administrator, you can:
        
        - Invite team members to the dashboard
        - Assign appropriate user roles and permissions
        - Set up access restrictions for sensitive data
        - Monitor user activity logs
        
        Complete your account setup to ensure you get the most out of the NCTV Dashboard and maintain appropriate security measures.
      `,
      category: "Introduction & Getting Started",
      categorySlug: "introduction",
      tags: ["account", "setup", "security", "profile"],
      readingTime: "5 min read",
      lastUpdated: "2023-12-10",
      headings: [
        { id: "setting-up-your-account", title: "Setting Up Your Account", level: 2 },
        { id: "initial-login-process", title: "Initial Login Process", level: 3 },
        { id: "completing-your-profile", title: "Completing Your Profile", level: 3 },
        { id: "user-preferences", title: "User Preferences", level: 3 },
        { id: "security-settings", title: "Security Settings", level: 3 },
        { id: "team-access-admin-only", title: "Team Access (Admin Only)", level: 3 },
      ],
    },
    {
      id: "managing-campaigns",
      title: "Managing Campaigns",
      slug: "managing-campaigns",
      excerpt: "How to create, edit, schedule, and track ad campaigns, including setting budgets and targeting locations.",
      content: `
        ## Managing Campaigns
        
        Effective campaign management is at the heart of advertising success. The NCTV Dashboard provides comprehensive tools for creating, managing, and optimizing your ad campaigns.
        
        ### Creating a New Campaign
        
        To create a new campaign:
        
        1. Navigate to the Campaigns section
        2. Click the "Create Campaign" button
        3. Select your campaign type (Display, Video, Social, etc.)
        4. Fill in the campaign details form
        5. Set your campaign objectives and KPIs
        6. Review and launch your campaign
        
        ### Setting Campaign Budgets
        
        Budget management is crucial for cost-effective advertising:
        
        - Set daily or lifetime budgets for your campaigns
        - Allocate budgets across different channels
        - Configure bid strategies (manual or automated)
        - Set up budget alerts to avoid overspending
        
        ### Targeting Options
        
        Refine your audience targeting with these options:
        
        - Geographic targeting (countries, regions, cities)
        - Demographic targeting (age, gender, income)
        - Interest-based targeting
        - Behavioral targeting
        - Device and platform targeting
        
        ### Campaign Scheduling
        
        Optimize your campaign timing:
        
        - Set start and end dates
        - Configure dayparting (specific hours of the day)
        - Schedule seasonal promotions
        - Create recurring campaign patterns
        
        ### Tracking and Optimization
        
        Monitor and improve campaign performance:
        
        - View real-time performance metrics
        - Set up custom reports and dashboards
        - Implement A/B testing for creative optimization
        - Use automated rules for campaign adjustments
        
        ### Best Practices
        
        - Start with clear campaign objectives
        - Use specific naming conventions for easy management
        - Regularly review performance and make adjustments
        - Archive completed campaigns for cleaner workspace
        
        Mastering campaign management will help you achieve better results and maximize your advertising ROI.
      `,
      category: "Using the Dashboard",
      categorySlug: "using-dashboard",
      tags: ["campaigns", "budgets", "targeting", "scheduling"],
      readingTime: "7 min read",
      lastUpdated: "2024-01-15",
      headings: [
        { id: "managing-campaigns", title: "Managing Campaigns", level: 2 },
        { id: "creating-a-new-campaign", title: "Creating a New Campaign", level: 3 },
        { id: "setting-campaign-budgets", title: "Setting Campaign Budgets", level: 3 },
        { id: "targeting-options", title: "Targeting Options", level: 3 },
        { id: "campaign-scheduling", title: "Campaign Scheduling", level: 3 },
        { id: "tracking-and-optimization", title: "Tracking and Optimization", level: 3 },
        { id: "best-practices", title: "Best Practices", level: 3 },
      ],
    },
    {
      id: "common-issues-fixes",
      title: "Common Issues & Fixes",
      slug: "common-issues-fixes",
      excerpt: "Solutions for frequently reported problems, such as campaign delays, login errors, and missing reports.",
      content: `
        ## Common Issues & Fixes
        
        Even with the most reliable systems, you may occasionally encounter issues. Here are solutions to common problems reported by NCTV Dashboard users.
        
        ### Login Problems
        
        **Issue**: Unable to log in to your account
        
        **Solutions**:
        - Check that you're using the correct email address and password
        - Clear your browser cache and cookies
        - Try using an incognito/private browsing window
        - Reset your password using the "Forgot Password" link
        - Ensure your account hasn't been suspended for security reasons
        
        ### Campaign Not Serving
        
        **Issue**: Your campaign is active but ads aren't being delivered
        
        **Solutions**:
        - Verify that your campaign budget hasn't been exhausted
        - Check that your targeting isn't too narrow
        - Ensure your ad creatives comply with platform policies
        - Confirm that your campaign scheduling is correct
        - Wait at least 4 hours for campaign approval and activation
        
        ### Missing or Delayed Reports
        
        **Issue**: Reports are not showing recent data or are missing entirely
        
        **Solutions**:
        - Note that data may have up to 24-hour reporting delay
        - Check your date range filters in the reporting section
        - Clear your browser cache and refresh the page
        - Verify that you have appropriate permissions to view reports
        - Try generating the report in a different format
        
        ### Billing Issues
        
        **Issue**: Problems with invoices or payments
        
        **Solutions**:
        - Verify your payment method is up to date
        - Check that your billing address matches your payment card
        - Review account spending limits and adjust if necessary
        - Contact your financial institution if payments are being declined
        - Request invoice corrections through the support portal
        
        ### Performance Tracking Discrepancies
        
        **Issue**: Dashboard metrics don't match your internal tracking
        
        **Solutions**:
        - Check that tracking pixels are properly implemented
        - Verify attribution models and lookback windows
        - Consider time zone differences in reporting
        - Account for ad blockers affecting tracking
        - Ensure UTM parameters are correctly configured
        
        If you continue to experience issues after trying these solutions, please contact our support team for assistance.
      `,
      category: "Troubleshooting & FAQs",
      categorySlug: "troubleshooting",
      tags: ["troubleshooting", "errors", "fixes", "problems"],
      readingTime: "6 min read",
      lastUpdated: "2024-02-20",
      headings: [
        { id: "common-issues-fixes", title: "Common Issues & Fixes", level: 2 },
        { id: "login-problems", title: "Login Problems", level: 3 },
        { id: "campaign-not-serving", title: "Campaign Not Serving", level: 3 },
        { id: "missing-or-delayed-reports", title: "Missing or Delayed Reports", level: 3 },
        { id: "billing-issues", title: "Billing Issues", level: 3 },
        { id: "performance-tracking-discrepancies", title: "Performance Tracking Discrepancies", level: 3 },
      ],
    },
    {
      id: "new-features-announcements",
      title: "New Features & Announcements",
      slug: "new-features-announcements",
      excerpt: "Updates about the latest improvements and releases within the dashboard.",
      content: `
        ## New Features & Announcements
        
        Stay up-to-date with the latest enhancements to the NCTV Dashboard. We regularly release new features and improvements to help you manage your campaigns more effectively.
        
        ### March 2024 Updates
        
        #### Advanced Audience Targeting
        
        We've enhanced our audience targeting capabilities:
        
        - Custom audience segment builder
        - Behavioral targeting based on website interactions
        - Look-alike audience generation
        - Improved demographic filtering options
        
        #### Redesigned Analytics Dashboard
        
        Our analytics section has been completely redesigned:
        
        - Customizable dashboard layouts
        - New visualization types (heatmaps, funnel charts)
        - Export options in multiple formats
        - Scheduled report delivery via email
        
        ### February 2024 Updates
        
        #### Campaign Budget Optimization
        
        New tools to help you maximize your ad spend:
        
        - AI-powered budget allocation suggestions
        - Automated budget pacing controls
        - Cross-campaign budget management
        - Performance forecasting based on budget changes
        
        #### Mobile App Launch
        
        We're excited to announce our new mobile app:
        
        - Available for iOS and Android
        - Real-time campaign monitoring
        - Push notifications for important alerts
        - On-the-go campaign adjustments
        
        ### January 2024 Updates
        
        #### Integration Marketplace
        
        Connect your favorite tools with the NCTV Dashboard:
        
        - CRM integrations (Salesforce, HubSpot)
        - Analytics platforms (Google Analytics, Adobe)
        - E-commerce platforms (Shopify, WooCommerce)
        - Team collaboration tools (Slack, Microsoft Teams)
        
        #### Enhanced Security Features
        
        We've strengthened our security measures:
        
        - SAML/SSO authentication options
        - Role-based access controls
        - Audit logging for all account activities
        - IP-based access restrictions
        
        ### Upcoming Features
        
        Here's a sneak peek at what's coming soon:
        
        - Creative asset management library
        - Advanced A/B testing framework
        - Expanded API functionality
        - Multi-language support
        
        Stay tuned for more updates and remember to check the in-app notifications for immediate announcements.
      `,
      category: "Updates & Best Practices",
      categorySlug: "updates",
      tags: ["features", "updates", "announcements", "new"],
      readingTime: "5 min read",
      lastUpdated: "2024-03-10",
      headings: [
        { id: "new-features-announcements", title: "New Features & Announcements", level: 2 },
        { id: "march-2024-updates", title: "March 2024 Updates", level: 3 },
        { id: "february-2024-updates", title: "February 2024 Updates", level: 3 },
        { id: "january-2024-updates", title: "January 2024 Updates", level: 3 },
        { id: "upcoming-features", title: "Upcoming Features", level: 3 },
      ],
    },
  ];
  
  // Helper function to get articles by category
  export const getArticlesByCategory = (categorySlug: string): Article[] => {
    return articles.filter(article => article.categorySlug === categorySlug);
  };
  
  // Helper function to get article by slug
  export const getArticleBySlug = (slug: string): Article | undefined => {
    return articles.find(article => article.slug === slug);
  };
  
  // Helper function to get recent articles
  export const getRecentArticles = (limit: number = 5): Article[] => {
    return [...articles].sort((a, b) => {
      return new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime();
    }).slice(0, limit);
  };
  
  // Helper function to get popular articles (mocked here)
  export const getPopularArticles = (limit: number = 5): Article[] => {
    // In a real scenario, this would be based on view counts or other metrics
    return articles.slice(0, limit);
  };