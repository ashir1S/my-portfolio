# 🚀 Ashirwad Sinha | Personal Portfolio

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![PyTorch](https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white)

Welcome to the repository for my personal portfolio website — a responsive, single-page React application that showcases my professional background, technical skill set, and applied AI/ML projects.

## 👨‍💻 About Me

I'm a final-year **MCA student at Thapar Institute of Engineering and Technology** (BCA, Patliputra University, Patna) and an incoming **Technology Analyst at Deloitte USI**, Hyderabad.

My core focus is **Computer Vision, applied GenAI, and end-to-end ML deployment** — from model architecture through to production-ready pipelines. Highlights include a 1st Runner-Up finish at an IIT Kharagpur data analytics hackathon and a top-5 Kaggle placement.

## 🧠 Tech Stack

**Portfolio site:** React.js, Bootstrap, deployed on Vercel

**AI/ML engineering:**
| Area | Tools |
|---|---|
| Computer Vision | PyTorch, OpenCV, YOLOv8 |
| GenAI / LLM | LangChain, Sentence Transformers |
| MLOps | Docker, MLflow, DVC |
| Deployment | Flask, Streamlit, AWS, Hugging Face Spaces |
| Data Science | Scikit-learn |

## 🚀 Featured Projects

- **DEVision (Driver Eye Vision Model)** — MCA capstone project (Team NOVA) predicting driver gaze coordinates from eye images and facial landmarks to flag road inattention. Combines a Residual Dense Block eye encoder, a landmark MLP encoder, and dual attention fusion, trained with a Smooth L1 + Angular loss on the DGAZE dataset and benchmarked against the I-DGAZE baseline.
  → [TEAMNOVACAPSTONE2025/Dashgaze](https://github.com/TEAMNOVACAPSTONE2025/Dashgaze)

- **OmniJet Particle Classifier** — Built for the NSSC 2025 Data Analytics Challenge at IIT Kharagpur (Team ASHSUM). Jet classification on the HLS4ML LHC Jet dataset via a fine-tuned ResNet-18 and a PCA-optimized Random Forest, plus a CNN autoencoder for anomaly detection.
  → [Live demo on Hugging Face](https://huggingface.co/spaces/Ashirwad12/omnijet-particle-classifier)

- **S.E.N.T.I.N.E.L.** — A YOLOv8-Medium computer vision system built for IIT BHU's "Serve Smart" Hackathon (Team ASHSUM), detecting assets in aerial/satellite imagery. Reported 0.715 mAP@50.
  → [Live demo on Hugging Face](https://huggingface.co/spaces/Ashirwad12/SENTINEL)

- **Multi-Dataset-EDA** — Exploratory data analysis and feature engineering notebooks across the Wine Quality, Flight Price, and Google Play Store datasets.
  → [ashir1S/Multi-Dataset-EDA](https://github.com/ashir1S/Multi-Dataset-EDA)

## 📁 Repository Structure

```text
my-portfolio/
├── public/               # Static assets, index.html, and manifest
├── src/                  # React application source code
│   ├── App.js            # Main application / routing
│   └── index.js          # Entry point
├── .gitignore            # Ignored files and directories
├── package-lock.json     # Locked dependency tree
└── package.json          # Project metadata and npm scripts
```

## 💻 Local Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ashir1S/my-portfolio.git
   ```
2. **Navigate into the directory:**
   ```bash
   cd my-portfolio
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Start the development server:**
   ```bash
   npm start
   ```
   The app opens at `http://localhost:3000`.

## 🌐 Deployment Notes

This portfolio is configured for deployment on **Vercel**. The build environment runs on Linux and is case-sensitive — make sure file imports (e.g. `.jpg` vs `.jpeg`) exactly match the actual filenames in your assets folder, or the build will fail.

## 📬 Connect

- **GitHub:** [@ashir1S](https://github.com/ashir1S)
- 
