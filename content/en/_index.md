---
title: 'Noble Consulting'
date: 2023-10-24
type: landing

design:
  # Default section spacing
  spacing: "6rem"

sections:
  - block: hero
    content:
      title: Noble Consulting
      text: Navigating Success across Borders
      primary_action:
        text: Contact Us
        url: /#contact
        icon: rocket-launch
      secondary_action:
        text: Export Consultancy
        url: /#export-consultancy
      announcement:
        text: "Contact us for a free initial consultation"
        link:
          text: "Contact Us"
          url: "/#contact"
    design:
      spacing:
        padding: [0, 0, 0, 0]
        margin: [0, 0, 0, 0]
      # For full-screen, add `min-h-screen` below
      css_class: "dark"
      background:
        color: "black"
        image:
          # Add your image background to `assets/media/`.
          filename: background.jpg
          filters:
            brightness: 0.3 
          size: cover
          position: center
          parallax: true
          text_color_light: true            

  - block: markdown
    id: export-consultancy
    content:
      title: Export Consultancy
      text: |
        Welcome to our export consulting firm, where we specialize in facilitating seamless trade for businesses looking to expand their reach into Korea and from Korea to the global market. We provide comprehensive support and guidance through every step of the export process. We understand the intricacies of government policies around trade and investment, ensuring that your business navigates these regulations with ease and efficiency. Partner with us to unlock new opportunities and propel your business to international success.

  - block: markdown
    id: contact
    content:
      title: Contact Us
      text: |
          
          {{< contact_form id="contact-form" placeholder_name="Name" placeholder_email="Email Address" placeholder_message="Message" button_label="Send ✉️">}}
    design:
      css_class: "bg-gray-100 dark:bg-gray-900"
          


          
  - block: cta-button-list
    content:
      # Need a custom icon?
      # Add an SVG image to the `assets/media/icons/` folder and reference it in the `icon` field below
      buttons:
        - text: E-mail Us
          url: 'mailto:sun-seona.ku@live.com'
          icon: at-symbol
        - text: Connect with us on LinkedIn
          icon: brands/linkedin
          url: https://nz.linkedin.com/in/seona-ku-727a61163 

---