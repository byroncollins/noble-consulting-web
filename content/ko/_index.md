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
      text: 국경을 넘어 성공 탐색
      primary_action:
        text: 문의하기
        url: /#contact
        icon: rocket-launch
      secondary_action:
        text: 수출 컨설팅
        url: /#export-consultancy
      announcement:
        text: "무료 초기 상담을 받으려면 연락하세요"
        link:
          text: "문의하기"
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
      title: 수출 컨설팅
      text: |
        한국 및 한국에서 글로벌 시장으로 사업 영역을 확장하려는 기업의 원활한 무역 촉진을 전문으로 하는 수출 컨설팅 회사에 오신 것을 환영합니다. 우리는 수출 과정의 모든 단계에서 포괄적인 지원과 지도를 제공합니다. 우리는 무역과 투자에 관한 정부 정책의 복잡성을 이해하여 귀하의 비즈니스가 이러한 규정을 쉽고 효율적으로 헤쳐 나갈 수 있도록 보장합니다. 우리와 협력하여 새로운 기회를 열고 귀하의 비즈니스를 국제적인 성공으로 추진하십시오.

  - block: markdown
    id: contact
    content:
      title: "문의하기"
      text: |
          
          {{< contact_form id="contact-form" placeholder_name="이름" placeholder_email="이메일 주소" placeholder_message="메시지" button_label="보내기 ✉️">}}
    design:
      css_class: "bg-gray-100 dark:bg-gray-900"
          


          
  - block: cta-button-list
    content:
      # Need a custom icon?
      # Add an SVG image to the `assets/media/icons/` folder and reference it in the `icon` field below
      buttons:
        - text: E-mail Us
          url: 'mailto:seona.ku@nobleconsulting.kr'
          icon: at-symbol
        - text: Connect with us on LinkedIn
          icon: brands/linkedin
          url: https://nz.linkedin.com/in/seona-ku-727a61163 

---