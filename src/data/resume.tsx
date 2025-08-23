import { Icons } from "@/components/icons";
import { link } from "fs";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Animesh Maheshwari",
  initials: "AM",
  url: "https://animeshmaheshwari22.github.io",
  location: "India",
  locationLink: "",
  description:
    "I love working in Machine Learning, Computer Vision, Generative AI, NLP, Data Science, MLOps. ",
  summary:
    "Experienced in NLP and Computer Vision, with expertise in fine-tuning and deploying LLMs, VLMs, and Vision Transformers; strong foundation in model optimization and scalable ML systems. Skilled in building end-to-end Generative AI pipelines from data collection and training to efficient cloud deployment.",
  avatarUrl: "/animesh.jpeg",
  skills: [
    "PyTorch",
    "TensorFlow",
    "Keras",
    "JAX",
    "vLLM",
    "LangChain",
    "LangGraph",
    "LlamaIndex",
    "Pinecone",
    "HuggingFace",
    "Spark",
    "Python",
    "C#",
    "Java",
    "C++",
    "SQL",
    "JavaScript",
    "Azure",
    "GCP",
    "Docker",
    "Kubernetes",
    "MLFlow",
    "Kubeflow",
    "Hadoop",
    "Kafka",
    "Git",
    "Jenkins",
    "Linux",
    "NumPy",
    "Pandas",
    "TFLite",
    "PyTorch Serve"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "animesh.m2202@gmail.com",
    tel: "+91-958-908-9315",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/AnimeshMaheshwari22",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/animesh-maheshwari",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/animesh2202",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Ushur AI Labs",
      href: "https://ushur.ai/",
      badges: [],
      location: "Santa Clara, California, United States",
      title: "Data Science Intern (Generative AI)",
      logoUrl: "/ushur.jpeg",
      start: "May 2024",
      end: "December 2024",
      description:
        `Fine-tuned Large Language Models using SFT, boosting long-text classification accuracy by 15% over baseline
through instruction tuning. Applied quantization to enable scalable, low-latency inference in production.
• Fine-tuned and evaluated Vision-Language Models for structured data extraction from complex documents,
achieving 95% entity extraction accuracy and outperforming OCR+LLM baselines. Analyzed 18 different models.
• Deployed optimized LLMs into high-throughput, low-latency production environments. Conducted extensive
ablation studies for the optimal cloud configuration.
• Prompt Engineering: Optimized prompts and implemented guardrails on OpenAI APIs, reducing LLM usage costs
by 20% while maintaining output quality and reliability.`
    },
    {
      company: "Mercedes-Benz R&D India",
      badges: [],
      href: "https://www.mbrdi.co.in/",
      location: "Bengaluru, India",
      title: "Software Engineer",
      logoUrl: "/mercedes.jpeg",
      start: "August 2021",
      end: "July 2023",
      description:
        `Engineered an end-to-end NLP pipeline using Transformers and Pinecone to automate bug triage, reducing manual
effort by over 72 hours per release cycle. Deployed the model on Azure ML studio.
• Designed and deployed a graph-enhanced RAG system for an internal knowledge-based Q&A chatbot, improving
documentation retrieval accuracy and reducing average bug resolution time by 20%.
• Automation & Monitoring: Developed full-stack web applications (Node.js, ReactJS, SQL) that automated monitoring
and governance processes, eliminating 120+ hours of manual work per month across business units. Implemented
CI/CD pipelines to ensure seamless deployment and reliability.`,
    },
    {
      company: "Intelligent Robotics and Vision Lab, UT Dallas",
      href: "https://labs.utdallas.edu/irvl/",
      badges: [],
      location: "Remote",
      title: "Computer Vision Research Assistant - Remote",
      logoUrl: "/utd.png",
      start: "January 2024",
      end: "Present",
      description:
        `Led end-to-end research on unseen object instance segmentation, achieving a 14-point F-score improvement over
RGB-only baselines by training a transformer model with ground-truth depth and inferring with synthetic depth.
• Prototyped and evaluated novel depth-aware fusion techniques within vision transformers; performed extensive
ablation studies to validate architectural improvements for real-time robotic perception.
• Engineered custom data processing pipelines and optimized transformer models for deployment, gaining deep expertise
in multimodal fusion and model distillation.`,
    }
  ],
  education: [
    {
      school: "University of Texas at Dallas",
      href: "https://engineering.utdallas.edu/",
      degree: "M.S. in Computer Science (Intelligent Systems)",
      logoUrl: "/utd.png",
      start: "August 2023",
      end: "May 2025",
    },
    {
      school: "Dayananda Sagar College of Engineering",
      href: "https://uwaterloo.ca",
      degree: "B.E. in Computer Science",
      logoUrl: "/dsce.jpg",
      start: "August 2017",
      end: "August 2021",
    }
  ],
  projects: [
    {
      title: "Machine Learning Reproducibility Challenge 2020",
      href: "https://openreview.net/pdf?id=DmNeiy8i5lu",
      dates: "",
      active: false,
      description:
        `Published a report verifying claims from the paper Principal
Feature Visualisation in Convolutional Neural Networks (ECCV 2020).`,
      technologies: [
        "PyTorch",
        "OpenCV"
      ],
      links: [
        {
          type: "Publication Link",
          href: "https://openreview.net/pdf?id=DmNeiy8i5lu",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/mlrc.png",
      video:
        "",
    },


    {
      title: "Multimodal Digital Health Assistant",
      href: "",
      dates: "",
      active: true,
      description:
        `Axxess Healthcare Hackathon: Developed a digital assistant integrating
Automatic Speech Recognition, NLP, and CV for real-time patient recovery monitoring and emergency response. Built a LangChain based RAG
pipeline over a vector database to power a Q&A chatbot.`,
      technologies: [
        "PyTorch",
        "OpenCV",
        "Mediapipe",
        "LangChain",
        "React.JS",
        "Node.js",
      ],
      links: [
        {
          type: "Demo",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Code",
          href: "https://github.com/AnimeshMaheshwari22/QuickRecover",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },

    {
      title: "Open Source Contributions - Kornia Computer Vision",
      href: "",
      dates: "",
      active: false,
      description:
        `Implemented Unsharp Mask Filtering, an image
sharpening technique with code and tutorial. Developed Integral Image, optimizing box filter computation for faster
processing, benefiting multiple algorithms.`,
      technologies: [
        "PyTorch",
        "Kornia",
      ],
      links: [
        {
          type: "Unsharp Mask",
          href: "https://github.com/kornia/kornia/pull/1004",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Integral Image",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/kornia_new.png",
      video: "",
    },

    {
      title: "3D object detection with Vision Transformer",
      href: "",
      dates: "",
      active: false,
      description:
        `Developed a custom architecture with RGB-Point Cloud fusion inspired
by DETR based methods. Developed the complete pipeline from data preprocessing to evaluation.`,
      technologies: [
        "PyTorch",
        "Open3d",
        "Python",
        "NumPy"
      ],
      links: [
        {
          type: "Report",
          href: "https://docs.google.com/document/d/1PijU3u9D0kvclEE5JQJw93S0YZMxbBpU8i7-QY2Cqsc/edit?usp=sharing",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Code",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/3detr.png",
      video: "",
    },



    {
      title: "Diffusion models based image synthesis",
      href: "",
      dates: "",
      active: false,
      description:
        `Project for Computer Vision graduate course under professor Yapeng Tian, UT Dallas. Fine-tuned InstructPix2Pix and ControlNet stable diffusion models for
conversion of CT scans to MRI images achieving 83.28% structural similarity score.`,
      technologies: [
        "PyTorch",
        "OpenCV"
      ],
        links: [
        {
          type: "Report",
          href: "https://drive.google.com/file/d/1J75SdLIrvl7jdU7BJRyE7LzI-82nmh1m/view?usp=sharing",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Code",
          href: "https://github.com/AnimeshMaheshwari22/mediffuse",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/cttomri.gif",
      video:
        "",
    },

    {
      title: "Google Explore Machine Learning Bootcamp project",
      href: "",
      dates: "",
      active: false,
      description:
        `Developed a 96% accurate end-to-end garbage object detection app for edge devices, selected among the top 15 teams from 120 applications across the country.`,
      technologies: [
        "TensorFlow",
        "TFLite",
        "Python",
        "OpenCV"
      ],
        links: [
        {
          type: "Presentation",
          href: "https://docs.google.com/presentation/u/1/d/1ePRUbti1EuDk8B4XNhpzduBorTUVmZVhppyy6E4vZlE/edit?usp=sharing",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "/exploreml.png",
      video:
        "",
    },

    {
      title: "Custom Premium prediction engine to benefit scaling of small businesses",
      href: "",
      dates: "",
      active: false,
      description:
        `HackUTD Statefarm track: Custom Insurance Premium recommendation engine -- Developed a custom insurance premium engine that analyzes
company financials for recommendation. Curated a large scale synthetic dataset with domain knowledge.`,
      technologies: [
        "XGBoost",
        "Python",
        "Scikit-Learn",
        "Data Analysis",

      ],
        links: [
        {
          type: "Code",
          href: "https://github.com/HackUTD-X/backend",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "/hackathon.png",
      video:
        "",
    },



    {
      title: "Computer Vision Research Project Assistant",
      href: "",
      dates: "",
      active: false,
      description:
        `Dayananda Sagar College of Engineering
         Designed a research grant
proposal for aerial video change detection. Translated ML research papers into working code, implementing optical flow,
structural similarity, and feature matching algorithms. Delivered a complete system with analysis report.`,
      technologies: [
        "PyTorch",
        "OpenCV"
      ],
      links: [],
      
      image: "/changedet.png",
      video:
        "",
    },
    
  ],
  hackathons: [
    {
      title: "University board award - Deep Learning project funding",
      dates: "August 2021",
      location: "Bengaluru, Karnataka, India",
      description:
        `Innovation Grant Winner for Deep Learning: On-device, secure, facial recognition based exam proctoring - Awarded
university funding for final-year project. Led a team of 4 to design and build a full multimodal analytics – vision and audio
pipeline using PyTorch, OpenCV, TensorFlow for detecting malpractice in online exams in real-time.`,
      image:
        "/vtu.png",
      mlh: "",
      links: [],
    },
    {
      title: "Ernst & Young Hackpions 1.0",
      dates: "",
      location: "Bengaluru, Karnataka",
      description:
        `Secured 2nd place nationwide in the EY GDS Hackathon, competing against top industry and student teams from across the country with a project on Social Media Listening, leveraging advanced data analysis to evaluate EY’s global social media presence, uncover regions with weak engagement, and propose strategic, data-driven solutions to enhance brand visibility worldwide.`,
      image:
        "/ey.webp",
      mlh: "",
      links: [],
    },

          {
      title: "Google Explore Machine Learning Bootcamp",
      dates: "",
      location: "Hyderabad, Telangana",
      description:
        `Invited to Google India Hyderabad campus as one of the Top 15 teams nationwide through the Google AI facilitators program. Developed an end-to-end garbage detection and classification system handling 60 waste categories to assist sanitation workers. Led data annotation, model training, and deployment on an edge device for real-time classification.`,
      image:
        "/googleai.png",
      mlh: "",
      links: [],
    },

    {
      title: "Accio CodeWars",
      dates: "",
      location: "Bengaluru, Karnataka",
      description:
        `Ranked in the top 6% out of 11,000+ participants in AccioJobs CodeWars, a national-level Data Structures & Algorithms competition.`,
      image:
        "/accio.webp",
      mlh: "",
      links: [],
    },

        {
      title: "Ernst & Young Hackpions 2.0",
      dates: "",
      location: "Bengaluru, Karnataka",
      description:
        `Secured 4th place nationwide in the EY GDS Hackathon 2.0, competing against top industry and student teams from across the country. Built an NLP pipeline using BERT for sentence analysis and keyword extraction, improving accuracy by 20%.
Optimized text processing with advanced data structures, reducing latency by 30%.`,
      image:
        "/ey.webp",
      mlh: "",
      links: [],
    },

        {
      title: "Sutherland Innov-a-thon",
      dates: "",
      location: "Bengaluru, Karnataka",
      description:
        `Invited to Sutherland India HQ amongst the top 30 teams out of 1700+ registrations for building a cancer classification and patient management application with CNN and Deep Learning.`,
      image:
        "/sutherland.png",
      mlh: "",
      links: [],
    },

  ],
} as const;
