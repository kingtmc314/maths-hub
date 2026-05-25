# 數學學習資源中心 — Maths Learning Hub

> **Live Site:** https://kingtmc314.github.io/maths-hub/
> **User Guide:** https://kingtmc314.github.io/maths-hub/guide.html
> **GitHub Repo:** https://github.com/kingtmc314/maths-hub

A bilingual (Chinese/English) learning portal integrating all interactive mathematics tools for HKDSE Core Mathematics and Module 2 (M2) students.

---

## 🌐 Features

- **Bilingual Interface** — Click the `EN / 中` toggle (top-right) to switch between English and Chinese; preference saved automatically.
- **KaTeX LaTeX Rendering** — All mathematical formulas rendered with KaTeX for precise, exam-quality display.
- **Responsive Design** — Works on desktop, tablet and mobile browsers.
- **Pure Static Site** — HTML + CSS + JS only. No build step required. Hosted on GitHub Pages.

---

## 📚 Tools

### 數學（必修） — Core Mathematics

| Tool | Description | Link |
|------|-------------|------|
| 三角計算器（2D & 3D） | 2D & 3D trigonometry solver with Sine/Cosine Rule, LaTeX steps, PDF export | [solid-geometry-calculator](https://kingtmc314.github.io/solid-geometry-calculator/) |
| 排列、組合及概率 | Permutation, combination & probability with 5-step guided interface | [dse-pc-prob-calculator](https://kingtmc314.github.io/dse-pc-prob-calculator/) |

### 數學 (M2) — Algebra

| Tool | Description | Link |
|------|-------------|------|
| 線性代數實驗室 | Matrix operations, determinant, inverse, eigenvalues, diagonalisation, Aⁿ, system of equations, 2D/3D visualisation | [linear-algebra-lab](https://kingtmc314.github.io/linear-algebra-lab/) |
| 級數與歸納法計算器 | Series closed-form derivation, proof by mathematical induction, numerical verification | [seriescalc-mdhgko93.manus.space](https://seriescalc-mdhgko93.manus.space) |

### 數學 (M2) — Calculus

| Tool | Description | Link |
|------|-------------|------|
| 微分與曲線描繪 | Full curve analysis: f'(x), f''(x), critical points, monotonicity, concavity, asymptotes, tangent lines | [curve-analyzer](https://kingtmc314.github.io/curve-analyzer/) |
| 積分：面積與體積 | Area between curves, volumes of revolution (disk/washer/shell), 3D animation, 16 presets | [integcalc-lab](https://kingtmc314.github.io/integcalc-lab/) |
| 不定積分與定積分 | Indefinite/definite integration with M2-scoped methods (substitution, by parts, trig sub, partial fractions) | [integral-calculator-students](https://kingtmc314.github.io/integral-calculator-students/) |

---

## 📁 File Structure

```
maths-hub/
├── index.html      # Main portal page (bilingual, KaTeX, responsive)
├── guide.html      # Comprehensive user guide for all 7 tools
├── style.css       # Shared styles (modern academic theme)
├── script.js       # Language toggle logic
└── README.md       # This file
```

---

## 🎨 Design

- **Typography:** Source Serif 4 (headings) + Inter (body) + Noto Serif TC (CJK)
- **Colour Scheme:** Indigo/slate primary, amber accent for Core, teal accent for M2
- **Theme:** Modern academic — clean white background, subtle grid pattern, KaTeX formula showcase
- **Animations:** Fade-in on scroll, card hover lift, smooth language transitions

---

## 🚀 Deployment

Pure static site deployed via **GitHub Pages** from the `main` branch root directory.

To update:
```bash
git add .
git commit -m "Update: <description>"
git push origin main
```

---

## 📖 User Guide

A detailed bilingual user guide is available at [`guide.html`](https://kingtmc314.github.io/maths-hub/guide.html), covering:
- Step-by-step instructions for each tool
- Input format reference tables
- Key formulas with LaTeX rendering
- FAQ section

---

*For HKDSE Mathematics students · 2025–26 Academic Year*
