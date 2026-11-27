// UK multi-agent systems labs.
// This file feeds both the map and the labs directory on the website.
// Labs submit changes through the lab Google Form (linked on the site).
// Updates to labs already in this list are applied on the page once an
// organiser has approved them (see LAB_UPDATES_CSV_URL in index.html). A NEW lab only appears once an
// organiser adds it to this list, with its lat / lon.
//
// `labs` holds the current directory (entries collected for the 2025 symposium).
//   lat / lon place the lab on the map. To find them, right-click the
//   location in Google Maps or OpenStreetMap and copy the coordinates.
// `tags` use the same research topics as the lab form:
//   - Multi-agent reinforcement learning
//   - LLM-based agents and agentic AI
//   - Agent evaluation and benchmarks
//   - Cooperative AI and coordination
//   - Game theory, mechanism design and markets
//   - Negotiation, argumentation and agent communication
//   - Human-agent interaction and human-centred AI
//   - AI safety, alignment and trustworthiness
//   - Formal methods and verification
//   - Governance, policy and ethics
//   - Multi-robot systems and swarms
//   - Agent-based modelling and simulation
//   - Planning and reasoning
//   - Applications
// `areas` (optional) lists application domains such as Energy or Transport;
//   they appear on the lab card but not in the topic chart.
// `labs2020` holds entries from the original 2020 map that have not been updated since.

const labs = [
  {
    "name": "Aston Centre for Artificial Intelligence Research and Application (ACAIRA)",
    "org": "Aston University",
    "city": "Birmingham",
    "url": "https://www.aston.ac.uk/research/eps/acaira",
    "lat": 52.47224,
    "lon": -1.84606,
    "tags": [
      "Multi-agent reinforcement learning",
      "LLM-based agents and agentic AI",
      "Game theory, mechanism design and markets",
      "Agent-based modelling and simulation",
      "Applications"
    ],
    "areas": [
      "Energy"
    ],
    "desc": "ACAIRA is a research institute at Aston University focused on developing cutting-edge AI solutions for real-world challenges. A key area of its research is MAS, with several active projects in energy trading, marketing, mechanism design for autonomous driving, traffic management, and more. The group explores how intelligent agents can collaborate, negotiate, and make decisions in complex environments, aiming to create more efficient and adaptive systems. Research at ACAIRA integrates game theory, reinforcement learning, and optimisation techniques to enhance MAS applications. The institute works closely with industry partners to ensure its research has real-world impact."
  },
  {
    "name": "Research Centre for Computational Science and Mathematical Modelling",
    "org": "Coventry University",
    "city": "Coventry",
    "url": "",
    "lat": 52.41952,
    "lon": -1.53092,
    "tags": [
      "Multi-agent reinforcement learning",
      "Agent-based modelling and simulation"
    ],
    "desc": ""
  },
  {
    "name": "Multi-Agent Artificial General Intelligence (MAGI)",
    "org": "Google DeepMind",
    "city": "London",
    "url": "https://www.jzleibo.com",
    "lat": 51.53768,
    "lon": -0.12613,
    "tags": [
      "Multi-agent reinforcement learning",
      "LLM-based agents and agentic AI",
      "Cooperative AI and coordination",
      "Human-agent interaction and human-centred AI",
      "Agent-based modelling and simulation"
    ],
    "desc": ""
  },
  {
    "name": "Distributed Intelligence Systems team",
    "org": "Hartree Centre",
    "city": "Daresbury",
    "url": "",
    "lat": 53.3437,
    "lon": -2.6406,
    "tags": [
      "Multi-agent reinforcement learning",
      "LLM-based agents and agentic AI",
      "Cooperative AI and coordination",
      "Game theory, mechanism design and markets",
      "Agent-based modelling and simulation"
    ],
    "desc": ""
  },
  {
    "name": "HRE-UK Agents Lab",
    "org": "Honda R&D Europe (U.K.) Ltd",
    "city": "Reading",
    "url": "",
    "lat": 51.44785,
    "lon": -0.95746,
    "tags": [
      "Multi-agent reinforcement learning",
      "LLM-based agents and agentic AI",
      "Cooperative AI and coordination",
      "Game theory, mechanism design and markets",
      "Multi-robot systems and swarms",
      "Agent-based modelling and simulation",
      "Applications"
    ],
    "areas": [
      "Energy",
      "Transport"
    ],
    "desc": "HRE-UK is an overseas Honda R&D centre focused on anticipating future societal challenges in Europe and actively developing state-of-the-art technologies in the digital domain. Our commitment is to demonstrate the positive impact our future solutions will have on people and help Honda continue to be a company that society wants to exist. Our research into multi-agent systems includes agentic AI, multi-agent reinforcement learning and autonomy. Our application areas span the range Honda’s domain interests including mobility, energy and robotics."
  },
  {
    "name": "SNI Lab",
    "org": "Huawei Technologies",
    "city": "Dublin",
    "url": "",
    "lat": 53.37438,
    "lon": -6.28229,
    "tags": [
      "Multi-agent reinforcement learning"
    ],
    "desc": "Autonomous Network Management Research"
  },
  {
    "name": "IBM Research Europe (UKI)",
    "org": "IBM",
    "city": "Daresbury and Hursley",
    "url": "https://research.ibm.com/labs/uk",
    "lat": 53.34891,
    "lon": -2.66042,
    "tags": [
      "Multi-agent reinforcement learning",
      "LLM-based agents and agentic AI",
      "Cooperative AI and coordination",
      "Game theory, mechanism design and markets",
      "Agent-based modelling and simulation"
    ],
    "desc": "Working across two locations (Daresbury and Hursley), our teams have been constantly contributing to creating what’s next in computing. Our research is motivated by today’s most pressing challenges both in the global context and specific to UK industries and institutions. We bring cutting-edge computational science and engineering to define the quantum computing of the future, the next generation of artificial intelligence, and the technologies that will help accelerate scientific discovery, for UK and beyond."
  },
  {
    "name": "Transport Systems & Logistics Laboratory",
    "org": "Imperial College London",
    "city": "London",
    "url": "https://transport-systems.imperial.ac.uk/",
    "lat": 51.49936,
    "lon": -0.18484,
    "tags": [
      "Multi-agent reinforcement learning",
      "Cooperative AI and coordination",
      "Multi-robot systems and swarms",
      "Agent-based modelling and simulation"
    ],
    "desc": "The Transport Systems & Logistics Laboratory at Imperial College London undertakes research in transport operations, with an emphasis on computational optimisation, autonomous technologies, and artificial intelligence. Our research and algorithms enable transport operators to maximise operational efficiency and provide strategic resilience against systemic disruptions. Our group is led by Prof Panagiotis Angeloudis, and is affiliated with the Imperial Robotics Forum, the Alan Turing Institute and the Institute for Security Science and Technology."
  },
  {
    "name": "JPMorgan AI Research",
    "org": "JPMorganChase",
    "city": "London",
    "url": "",
    "lat": 51.50284,
    "lon": -0.01772,
    "tags": [
      "Multi-agent reinforcement learning",
      "LLM-based agents and agentic AI",
      "Game theory, mechanism design and markets",
      "Agent-based modelling and simulation",
      "Planning and reasoning"
    ],
    "desc": ""
  },
  {
    "name": "Cooperative AI Lab",
    "org": "King's College London",
    "city": "London",
    "url": "https://coopai.kcl.ac.uk/",
    "lat": 51.51162,
    "lon": -0.11814,
    "tags": [
      "Multi-agent reinforcement learning",
      "LLM-based agents and agentic AI",
      "Cooperative AI and coordination",
      "Game theory, mechanism design and markets",
      "AI safety, alignment and trustworthiness",
      "Governance, policy and ethics"
    ],
    "desc": "Our research aim is to enable machines to exhibit cooperative and safe behavior in intelligent decision making tasks. To this end, we work on multi-agent cooperation, human-AI coordination, and scalable alignment, which includes human value learning, safety, and ethics."
  },
  {
    "name": "Hybrid Intelligence and Deception Exploration (HIDE) Lab",
    "org": "King's College London",
    "city": "London",
    "url": "https://hide-lab.github.io/",
    "lat": 51.51179,
    "lon": -0.11518,
    "tags": [
      "Multi-agent reinforcement learning",
      "Cooperative AI and coordination",
      "Game theory, mechanism design and markets",
      "Negotiation, argumentation and agent communication",
      "Human-agent interaction and human-centred AI",
      "AI safety, alignment and trustworthiness",
      "Governance, policy and ethics",
      "Agent-based modelling and simulation",
      "Planning and reasoning"
    ],
    "desc": "The Hybrid Intelligence and Deception Exploration (HIDE) Lab focuses on understanding the complexity of human-AI interactions and deception in increasingly hybrid societies. The lab is led by Dr. Stefan Sarkadi, who is currently a Proleptic Lecturer (Assistant Professor) in the Dept. of Informatics at King’s College London. The Lab’s aim is to act as an international hub for conducting state-of-the-art AI-based research to tackle the topic of deception."
  },
  {
    "name": "Reasoning and Planning Group",
    "org": "King's College London",
    "city": "London",
    "url": "https://www.kcl.ac.uk/research/rap",
    "lat": 51.5108,
    "lon": -0.11523,
    "tags": [
      "LLM-based agents and agentic AI",
      "Cooperative AI and coordination",
      "Negotiation, argumentation and agent communication",
      "Multi-robot systems and swarms",
      "Planning and reasoning"
    ],
    "desc": "The Reasoning and Planning (RAP) group researches symbolic models for reasoning involving argumentation, knowledge representation and planning, and the combination of reasoning, planning and machine learning approaches, and their applications in Robotics. Research within the RAP group considers both individual and multi-entity reasoning and planning, which may involve humans as well as AI systems."
  },
  {
    "name": "Interaction-Oriented Programming",
    "org": "Lancaster University",
    "city": "Lancaster",
    "url": "https://www.lancaster.ac.uk/staff/chopraak/",
    "lat": 54.06505,
    "lon": -2.76914,
    "tags": [
      "Formal methods and verification"
    ],
    "desc": "We practice Interaction-Oriented Programming, the idea that engineering multiagent systems means first modeling the interactions between the agents and then implementing them. Our lab boasts world-leading languages for modeling interactions, both in terms of the normative meaning and interaction protocols; approaches for verifying them; and programming models for implementing intelligent agents. Check out our software: https://gitlab.com/masr"
  },
  {
    "name": "Department of Mathematics LSE",
    "org": "London School of Economics",
    "city": "London",
    "url": "https://www.lse.ac.uk/Mathematics/Research/Game-Theory",
    "lat": 51.51442,
    "lon": -0.11639,
    "tags": [
      "Multi-agent reinforcement learning",
      "Cooperative AI and coordination",
      "Game theory, mechanism design and markets"
    ],
    "desc": ""
  },
  {
    "name": "Autonomous Systems Group",
    "org": "Northumbria University",
    "city": "Newcastle",
    "url": "https://www.northumbria.ac.uk/about-us/academic-departments/computer-and-information-sciences/research/autonomous-systems/",
    "lat": 54.97668,
    "lon": -1.53126,
    "tags": [
      "Multi-agent reinforcement learning",
      "Game theory, mechanism design and markets",
      "Multi-robot systems and swarms"
    ],
    "desc": ""
  },
  {
    "name": "Game AI Research Group",
    "org": "Queen Mary University of London",
    "city": "London",
    "url": "https://www.qmul.ac.uk/eecs/research/research-centres-and-groups/game-ai-research-group/",
    "lat": 51.51325,
    "lon": -0.05137,
    "tags": [
      "Multi-agent reinforcement learning",
      "LLM-based agents and agentic AI",
      "Cooperative AI and coordination",
      "Game theory, mechanism design and markets",
      "Agent-based modelling and simulation"
    ],
    "desc": "Our group is closely associated with the EPSRC funded IGGI Centre for Doctoral Training and also hosts the Tabletop Games project (TAG) featuring complex multi-player games."
  },
  {
    "name": "Distributed and Intelligent Computing Environments (DICE) Lab",
    "org": "Royal Holloway - University of London",
    "city": "Egham",
    "url": "https://dicelab-rhul.org/",
    "lat": 51.4257,
    "lon": -0.5631,
    "tags": [
      "Multi-agent reinforcement learning",
      "LLM-based agents and agentic AI",
      "Game theory, mechanism design and markets",
      "Negotiation, argumentation and agent communication",
      "Agent-based modelling and simulation",
      "Planning and reasoning"
    ],
    "desc": ""
  },
  {
    "name": "Defence Artificial Intelligence Research (DARe)",
    "org": "The Alan Turing Institute",
    "city": "London",
    "url": "https://www.turing.ac.uk/research/research-projects/defence-artificial-intelligence-research-dare",
    "lat": 51.5304,
    "lon": -0.1281,
    "tags": [
      "Multi-agent reinforcement learning",
      "Multi-robot systems and swarms",
      "Agent-based modelling and simulation",
      "Planning and reasoning"
    ],
    "desc": ""
  },
  {
    "name": "Daniela M. Romano",
    "org": "University College London",
    "city": "London",
    "url": "https://profiles.ucl.ac.uk/63472-daniela-romano",
    "lat": 51.52727,
    "lon": -0.13763,
    "tags": [
      "Human-agent interaction and human-centred AI",
      "Governance, policy and ethics",
      "Agent-based modelling and simulation"
    ],
    "desc": "Keywords: Agent-Based Modelling, Human-AI Interaction, Human-Centred AI, Responsible AI"
  },
  {
    "name": "Machine Intelligence Lab",
    "org": "University College London",
    "city": "London",
    "url": "https://www.machineintelligencelab.ai",
    "lat": 51.52783,
    "lon": -0.13522,
    "tags": [
      "Multi-agent reinforcement learning",
      "LLM-based agents and agentic AI",
      "Cooperative AI and coordination",
      "Game theory, mechanism design and markets",
      "Planning and reasoning"
    ],
    "desc": "The research activities of the Machine Intelligence Lab focus on the theoretical foundations of machine intelligence and its applications to a variety of real-world problems. The lab is headed by Professor Mirco Musolesi and is based at the Department of Computer Science, University College London."
  },
  {
    "name": "Agents at Aberdeen",
    "org": "University of Aberdeen",
    "city": "Aberdeen",
    "url": "https://www.abdn.ac.uk/ncs/departments/computing-science/research/agents-at-aberdeen/",
    "lat": 57.14821,
    "lon": -2.11092,
    "tags": [
      "Cooperative AI and coordination",
      "Negotiation, argumentation and agent communication",
      "AI safety, alignment and trustworthiness",
      "Planning and reasoning"
    ],
    "desc": "Agents at Aberdeen is a research group with a long history of investigating a wide variety of research topics related to autonomous agents, multi-agent systems and knowledge representation and reasoning. Our recent focus has been on exploring resilience, reliability, and coordination in autonomous multi-agent systems. We apply these techniques to a wide range of application domains, including but not limited to: emergency response, healthcare, decision-making in robotic systems, self-driving cars, explainability, and software engineering."
  },
  {
    "name": "BathMAS",
    "org": "University of Bath",
    "city": "Bath",
    "url": "",
    "lat": 51.36224,
    "lon": -2.36174,
    "tags": [
      "Multi-agent reinforcement learning",
      "LLM-based agents and agentic AI",
      "Cooperative AI and coordination",
      "Game theory, mechanism design and markets",
      "Multi-robot systems and swarms",
      "Agent-based modelling and simulation"
    ],
    "desc": ""
  },
  {
    "name": "Intelligent Robotics Lab (IRLab)",
    "org": "University of Birmingham",
    "city": "Birmingham",
    "url": "https://www.birmingham.ac.uk/research/activity/computer-science/artificial-intelligence/intelligent-robotics-lab",
    "lat": 52.54574,
    "lon": -1.85431,
    "tags": [
      "Multi-agent reinforcement learning",
      "Multi-robot systems and swarms"
    ],
    "desc": ""
  },
  {
    "name": "The Centre for Artificial Intelligence in Government (CAIG)",
    "org": "University of Birmingham",
    "city": "Birmingham",
    "url": "https://www.birmingham.ac.uk/research/centres-institutes/centre-for-artificial-intelligence-in-government",
    "lat": 52.52905,
    "lon": -1.98888,
    "tags": [
      "LLM-based agents and agentic AI",
      "Negotiation, argumentation and agent communication",
      "Governance, policy and ethics",
      "Agent-based modelling and simulation"
    ],
    "desc": "The Centre for Artificial Intelligence in Government (CAIG) harnesses the power of artificial intelligence and data science methodologies to explore the multifaceted intersections with social sciences, with a particular focus on democracy, global affairs, and sustainable development."
  },
  {
    "name": "Hauert Lab",
    "org": "University of Bristol",
    "city": "Bristol",
    "url": "https://hauertlab.com",
    "lat": 51.45729,
    "lon": -2.60353,
    "tags": [
      "Multi-agent reinforcement learning",
      "LLM-based agents and agentic AI",
      "Cooperative AI and coordination",
      "Multi-robot systems and swarms",
      "Agent-based modelling and simulation",
      "Applications"
    ],
    "areas": [
      "Biology",
      "Nanosystems"
    ],
    "desc": "The Hauert lab engineers swarms for people, and across scales—from nanorobots for cancer treatment, to larger robots for environmental monitoring or logistics. Principal Investigator: Prof. Sabine Hauert (sabine.hauert@bristol.ac.uk)."
  },
  {
    "name": "Hunt Lab",
    "org": "University of Bristol",
    "city": "Bristol",
    "url": "https://www.huntlab.uk",
    "lat": 51.45697,
    "lon": -2.59928,
    "tags": [
      "Multi-robot systems and swarms",
      "Agent-based modelling and simulation"
    ],
    "desc": ""
  },
  {
    "name": "Social AI and Multi-Agent Systems | Nirav Ajmeri Group",
    "org": "University of Bristol",
    "city": "Bristol",
    "url": "https://uob-mas.github.io",
    "lat": 51.4585,
    "lon": -2.60087,
    "tags": [
      "Multi-agent reinforcement learning",
      "LLM-based agents and agentic AI",
      "Cooperative AI and coordination",
      "Human-agent interaction and human-centred AI",
      "Governance, policy and ethics",
      "Agent-based modelling and simulation"
    ],
    "desc": "Our research focusses on advancing foundational AI for the societal good, focusing on the development of ethical multi-agent systems. Our work encompasses intelligent agents and normative multi-agent systems, multi-agent reinforcement learning, multi-agent simulations, and graph-based approaches, all while integrating normative principles to ensure that AI systems align with societal norms and values. Our research seeks to facilitate interactions between computational agents and social entities, such as humans and organizations, with a strong emphasis on promoting prosocial behaviour and ensuring equitable outcomes. We are based in the School of Computer Science at the University of Bristol. Our team is part of the federated Intelligent Systems Labs, which comprises several units focussing on AI, machine learning, and data science research. We are affiliated with the Collective Dynamics lab and the AI lab."
  },
  {
    "name": "cmbagent lab",
    "org": "University of Cambridge",
    "city": "Cambridge",
    "url": "https://github.com/CMBAgents",
    "lat": 52.20434,
    "lon": 0.11651,
    "tags": [
      "Multi-agent reinforcement learning",
      "LLM-based agents and agentic AI"
    ],
    "desc": "Multi-agent systems for data analysis developed by cosmologists"
  },
  {
    "name": "ProrokLab",
    "org": "University of Cambridge",
    "city": "Cambridge",
    "url": "https://proroklab.org/",
    "lat": 52.2096,
    "lon": 0.09746,
    "tags": [
      "Multi-agent reinforcement learning",
      "LLM-based agents and agentic AI",
      "Cooperative AI and coordination",
      "Multi-robot systems and swarms",
      "Agent-based modelling and simulation",
      "Planning and reasoning"
    ],
    "desc": "The Prorok Lab at the University of Cambridge develops solutions for collective intelligence in multi-robot and multi-agent systems. Our aim is to extend single robot capabilities through collaborative strategies. We develop data-driven and hybrid approaches to hard coordination problems, and are interested in enabling fast on-line decision-making, as typically required in robotics applications."
  },
  {
    "name": "Supply Chain AI Lab",
    "org": "University of Cambridge",
    "city": "Cambridge",
    "url": "https://www.ifm.eng.cam.ac.uk/research/supply-chain-ai-lab/",
    "lat": 52.21254,
    "lon": 0.08904,
    "tags": [
      "LLM-based agents and agentic AI",
      "Cooperative AI and coordination",
      "Game theory, mechanism design and markets"
    ],
    "desc": ""
  },
  {
    "name": "Autonomous Agents Research Group",
    "org": "University of Edinburgh",
    "city": "Edinburgh",
    "url": "https://agents.inf.ed.ac.uk/",
    "lat": 55.94441,
    "lon": -3.18895,
    "tags": [
      "Multi-agent reinforcement learning",
      "LLM-based agents and agentic AI",
      "Cooperative AI and coordination",
      "Agent-based modelling and simulation"
    ],
    "desc": "The Autonomous Agents Research Group is a research unit directed by Dr. Stefano V. Albrecht in the School of Informatics, University of Edinburgh. The group specialises in the development of artificial intelligence and machine learning technologies for autonomous systems control and decision making in complex environments. Current research focuses on algorithms for deep reinforcement learning, multi-agent reinforcement learning, and foundation models (e.g. LLMs) for autonomous systems."
  },
  {
    "name": "CHAI Lab",
    "org": "University of Edinburgh",
    "city": "Edinburgh",
    "url": "https://chai.inf.ed.ac.uk",
    "lat": 55.94297,
    "lon": -3.18552,
    "tags": [
      "LLM-based agents and agentic AI",
      "AI safety, alignment and trustworthiness",
      "Governance, policy and ethics"
    ],
    "areas": [
      "Cyber security"
    ],
    "desc": ""
  },
  {
    "name": "Learning Theory & Economics",
    "org": "University of Edinburgh",
    "city": "Edinburgh",
    "url": "https://fengxianghe.github.io/",
    "lat": 55.94652,
    "lon": -3.18552,
    "tags": [
      "Multi-agent reinforcement learning",
      "LLM-based agents and agentic AI",
      "Game theory, mechanism design and markets"
    ],
    "desc": "The lab's interest is in trustworthy AI, particularly deep learning theory, theory of decentralised learning, privacy in machine learning, symmetry in machine learning, learning theory in game-theoretical problems, and their applications in economics."
  },
  {
    "name": "Centre for Computational Finance and Economic Agents (CCFEA)",
    "org": "University of Essex",
    "city": "Colchester",
    "url": "https://www.essex.ac.uk/centres-and-institutes/computational-finance-and-economic-agents",
    "lat": 51.87305,
    "lon": 0.91522,
    "tags": [
      "Game theory, mechanism design and markets"
    ],
    "desc": ""
  },
  {
    "name": "Edmond Awad",
    "org": "University of Exeter",
    "city": "Exeter",
    "url": "https://experts.exeter.ac.uk/33375-edmond-awad",
    "lat": 50.73038,
    "lon": -3.50002,
    "tags": [
      "Cooperative AI and coordination",
      "Game theory, mechanism design and markets",
      "Human-agent interaction and human-centred AI",
      "Governance, policy and ethics",
      "Agent-based modelling and simulation"
    ],
    "desc": ""
  },
  {
    "name": "Artificial Intelligence and Robotics Lab",
    "org": "University of Glasgow",
    "city": "Glasgow",
    "url": "https://air-lan.github.io/AIR-Lab/",
    "lat": 55.85473,
    "lon": -4.31876,
    "tags": [
      "Multi-agent reinforcement learning",
      "LLM-based agents and agentic AI",
      "AI safety, alignment and trustworthiness",
      "Formal methods and verification",
      "Governance, policy and ethics",
      "Multi-robot systems and swarms",
      "Planning and reasoning",
      "Applications"
    ],
    "areas": [
      "Transport"
    ],
    "desc": "Contact: Dr Jianglin Lan Email: jianglin.lan@glasgow.ac.uk Research areas: Our mission is to advance AI and robotics by creating intelligent, secure, and ethical systems. We prioritize safety, reliability, and real-world resilience to maximize positive societal impact."
  },
  {
    "name": "Computational Climate Action Lab",
    "org": "University of Leeds",
    "city": "Leeds",
    "url": "https://cdp.leeds.ac.uk/research/normative-change-climate-emergency/",
    "lat": 53.80562,
    "lon": -1.70289,
    "tags": [
      "LLM-based agents and agentic AI",
      "Agent-based modelling and simulation"
    ],
    "desc": "One of the main obstacles stop climate change from further escalating is not technological, but the societal and political will. The goal of this research group is to understand how this societal and political will can be mobilised. Specifically, our research advances our understanding of social change and how it can be accelerated in response to the climate crisis. We use network science and computational social science methods, alongside generative AI-based ABM methods to study tipping points in social systems with applications towards climate change adaptations."
  },
  {
    "name": "MASS: Multi Agent Systems and Simulation Research Group",
    "org": "University of Leeds",
    "city": "Leeds",
    "url": "",
    "lat": 53.75452,
    "lon": -1.65482,
    "tags": [
      "LLM-based agents and agentic AI",
      "Agent-based modelling and simulation"
    ],
    "desc": "The MASS group specializes in Multi-Agent Systems, Cellular Automata and statistical simulations. Much of the work we do is social and/or ecological simulations aimed at discovering whether our understanding of these systems is accurate or prediction of how such systems may change. For further details, contact Nick Malleson (n.s.malleson@leeds.ac.uk)."
  },
  {
    "name": "Trustworthy Distributed Intelligence",
    "org": "University of Leeds",
    "city": "Leeds",
    "url": "",
    "lat": 53.80076,
    "lon": -1.48179,
    "tags": [
      "Multi-agent reinforcement learning",
      "LLM-based agents and agentic AI",
      "Cooperative AI and coordination",
      "Game theory, mechanism design and markets",
      "Agent-based modelling and simulation"
    ],
    "desc": ""
  },
  {
    "name": "Economics and Computation research group",
    "org": "University of Liverpool",
    "city": "Liverpool",
    "url": "",
    "lat": 53.38545,
    "lon": -2.91191,
    "tags": [
      "Multi-agent reinforcement learning",
      "LLM-based agents and agentic AI",
      "Cooperative AI and coordination",
      "Game theory, mechanism design and markets"
    ],
    "desc": ""
  },
  {
    "name": "Goal-Oriented Long-Lived Systems (GOALS) Lab",
    "org": "University of Oxford",
    "city": "Oxford",
    "url": "https://ori.ox.ac.uk/labs/goals/",
    "lat": 51.74841,
    "lon": -1.2361,
    "tags": [
      "Multi-agent reinforcement learning",
      "Cooperative AI and coordination",
      "Multi-robot systems and swarms"
    ],
    "desc": "The Goal-Oriented Long-Lived Systems (GOALS) Lab performs research around the problems of behaviour generation for autonomous systems. In particular we focus on long-term autonomy and task and mission planning for mobile robots which must operate for extended periods (days, weeks or months) in dynamic, uncertain environments. To create long-term autonomous behaviour we explore the application of artificial intelligence techniques to robots, particularly planning under uncertainty and machine learning, such that the longer robots act in an environment, the better they perform."
  },
  {
    "name": "Large Agent Collider (LAC) research lab",
    "org": "University of Oxford",
    "city": "Oxford",
    "url": "https://largeagentcollider.github.io/",
    "lat": 51.73778,
    "lon": -1.23987,
    "tags": [
      "Multi-agent reinforcement learning",
      "LLM-based agents and agentic AI",
      "Cooperative AI and coordination",
      "Game theory, mechanism design and markets",
      "Agent-based modelling and simulation"
    ],
    "desc": ""
  },
  {
    "name": "OXCAV - Oxford Control and Verification",
    "org": "University of Oxford",
    "city": "Oxford",
    "url": "https://oxcav.web.ox.ac.uk",
    "lat": 51.75755,
    "lon": -1.2385,
    "tags": [
      "Multi-agent reinforcement learning",
      "LLM-based agents and agentic AI",
      "Cooperative AI and coordination",
      "Game theory, mechanism design and markets",
      "AI safety, alignment and trustworthiness",
      "Formal methods and verification",
      "Multi-robot systems and swarms",
      "Applications"
    ],
    "areas": [
      "Energy"
    ],
    "desc": "OXCAV - The Oxford Control & Verification group - is part of the Department of Computer Science at the University of Oxford, and is led by Prof. Alessandro Abate. We tackle scientific challenges in the area of safe AI and assured autonomy. Technically, our research interests lie in the formal verification and optimal control of heterogeneous and complex dynamical models, built from first principles or learnt from data. We blend in techniques from machine learning and AI, such as Bayesian inference, RL, and game theory."
  },
  {
    "name": "FLAME GPU Team @ Research Software Engineering Sheffield",
    "org": "University of Sheffield",
    "city": "Sheffield",
    "url": "https://www.flamegpu.com",
    "lat": 53.38231,
    "lon": -1.48734,
    "tags": [
      "Formal methods and verification",
      "Agent-based modelling and simulation"
    ],
    "desc": "Research Software Engineering at Sheffield leads the development of the FLAME GPU 2 software tool for large scale, agent based simulation on graphics processing units (GPUs). The software underpins a wide range of international research using agent based simulation in areas such of computational biology through to pedestrian and transport dynamics. The development team is led by Prof Paul Richmond."
  },
  {
    "name": "Agents, Interaction and Complexity Research Group",
    "org": "University of Southampton",
    "city": "Southampton",
    "url": "https://www.southampton.ac.uk/research/groups/agents-interaction-complexity",
    "lat": 50.93521,
    "lon": -1.39014,
    "tags": [
      "Multi-agent reinforcement learning",
      "LLM-based agents and agentic AI",
      "Cooperative AI and coordination",
      "Game theory, mechanism design and markets",
      "Formal methods and verification",
      "Multi-robot systems and swarms",
      "Agent-based modelling and simulation"
    ],
    "desc": "The agents, interaction and complexity (AIC) research group is an interdisciplinary research group with over 20 academic staff focusing on artificial intelligence, including complex systems, robotics, multi-agent systems, and human-machine interactions. Our work explores complex socio‐technical, socio‐economic and socio‐ecological systems. We investigate both theory, such as safe, verifiable, and trustworthy autonomous systems, as well applications, such as smart cities and disaster response."
  },
  {
    "name": "Citizen-Centric AI Systems (CCAIS)",
    "org": "University of Southampton",
    "city": "Southampton",
    "url": "https://www.ccais.ac.uk/",
    "lat": 50.93476,
    "lon": -1.39563,
    "tags": [
      "Multi-agent reinforcement learning",
      "Game theory, mechanism design and markets",
      "Human-agent interaction and human-centred AI",
      "Governance, policy and ethics",
      "Applications"
    ],
    "areas": [
      "Energy",
      "Transport"
    ],
    "desc": "We are developing the fundamental science needed to build AI systems that can be trusted by citizen users. This involves a multi-disciplinary approach drawing on preference learning, human-AI interaction, game theory, participatory approaches and multiagent systems. We apply our work to pressing societal problems, especially in the energy and transportation domains."
  },
  {
    "name": "Intelligent Systems Team",
    "org": "University of Strathclyde",
    "city": "Glasgow",
    "url": "",
    "lat": 55.84241,
    "lon": -4.18693,
    "tags": [
      "Cooperative AI and coordination",
      "Game theory, mechanism design and markets",
      "Applications"
    ],
    "areas": [
      "Energy"
    ],
    "desc": ""
  },
  {
    "name": "Prosocial AI",
    "org": "University of Warwick",
    "city": "Coventry",
    "url": "",
    "lat": 52.41533,
    "lon": -1.46501,
    "tags": [
      "Multi-agent reinforcement learning",
      "LLM-based agents and agentic AI",
      "Cooperative AI and coordination",
      "Game theory, mechanism design and markets",
      "Formal methods and verification",
      "Governance, policy and ethics",
      "Agent-based modelling and simulation"
    ],
    "desc": "We work on Cooperative AI, through formal methods and agent-based modelling and simulation. We use game theory, reinforcement learning and social network dynamics. Based in the Computer Science Department at Warwick, we have inderdisciplinary collaborations with Psychology, Economics, Mathematics and Statistics. Members are Paolo Turrini (head), Chin-wing Leung (research fellow), Luisa Estrada (PhD student), Xiaoqing Fan (PhD student), Yueting Han (PhD student), Benedict Russell (PhD Student)."
  },
  {
    "name": "Centre for Air Traffic Management Research",
    "org": "University of Westminster",
    "city": "London",
    "url": "https://blog.westminster.ac.uk/atm-team/",
    "lat": 51.4968,
    "lon": -0.13299,
    "tags": [
      "Multi-agent reinforcement learning",
      "Agent-based modelling and simulation"
    ],
    "desc": "The Centre for Air Traffic Management is engaged in data driven analysis and applied research for industry and stakeholders. We are involved in numerous projects researching passenger mobility, performance assessment, environmental impacts, economic analysis, (network) modelling and simulation and data management. Mercury is an open source ABM capturing air transport (and multimodal) operations with the main stakeholders and processes modelled (https://github.com/UoW-ATM/Mercury/)"
  }
];

const labs2020 = [
  {
    "name": "Air Street",
    "contact": "Nathan Benaich",
    "url": "https://www.airstreet.com",
    "keywords": ""
  },
  {
    "name": "fetch.ai",
    "contact": "David Galindo",
    "url": "https://fetch.ai/",
    "keywords": "Values in multi-agent systems, including privacy, safety, security and transparency, Trust and reputation, Auctions and mechanism design"
  },
  {
    "name": "Five.AI Ltd",
    "contact": "Subramanian Ramamoorthy",
    "url": "https://five.ai/",
    "keywords": "Learning and adaptation, Robotics, human-robot/agent interaction"
  },
  {
    "name": "Heriot-Watt University, Edinburgh Campus",
    "contact": "Oliver Lemon",
    "url": "https://sites.google.com/site/hwinteractionlab/home",
    "keywords": "Conversational AI, Human-Robot Interaction, Natural Language Processing, Reinforcement Learning"
  },
  {
    "name": "Huawei UK",
    "contact": "Yaodong Yang",
    "url": "",
    "keywords": "Multiagent learning and planning"
  },
  {
    "name": "Imperial College London",
    "contact": "Alessio Lomuscio",
    "url": "",
    "keywords": "Safe AI, Verification of Multi-Agent Systems, Verification of Neural Systems"
  },
  {
    "name": "Imperial College London",
    "contact": "Farzaneh Farhadi",
    "url": "https://www.imperial.ac.uk/people/n.jennings/research.html",
    "keywords": "Non-cooperative games, Auctions and mechanism design, multi-agent scheduling, Coalition formation"
  },
  {
    "name": "Improbable",
    "contact": "Rory Greig",
    "url": "https://defence.improbable.io/research-and-insights",
    "keywords": "Agent-based models, simulation, complex systems, cognitive and behavioural modelling, reinforcement learning, Bayesian statistics, calibration, genetic algorithms, programming frameworks"
  },
  {
    "name": "King's College London",
    "contact": "Carmine Ventre",
    "url": "https://www.kcl.ac.uk/research/dai",
    "keywords": "Algorithmic Mechanism Design, Behavioural game theory"
  },
  {
    "name": "Kings College London Bush House",
    "contact": "Simon Miles",
    "url": "https://cusplondon.ac.uk/",
    "keywords": "normative systems, emergence, modelling"
  },
  {
    "name": "Lincoln Centre for Autonomous Systems Research",
    "contact": "Alan Millard",
    "url": "https://lcas.lincoln.ac.uk",
    "keywords": "Swarm robotics, collective behaviour, learning and adaptation, reasoning with internal models, collective fault-tolerance"
  },
  {
    "name": "Loughborough University London",
    "contact": "Varuna De Silva",
    "url": "https://www.lborolondon.ac.uk/institutes/digital-technologies/",
    "keywords": "Multi agent imitation learning, multi agent simulations, traffic simulation, sports analytics"
  },
  {
    "name": "Microsoft Research Cambridge",
    "contact": "Raluca Georgescu & Sam Devlin",
    "url": "https://www.microsoft.com/en-us/research/lab/microsoft-research-cambridge/",
    "keywords": "Engineering MAS, Humans and AI / Human-Agent Interaction, Social Choice and Cooperative Game Theory, Learning and Adaption"
  },
  {
    "name": "Oxford Applied and Theoretical Machine Learning Group",
    "contact": "Angelos Filos",
    "url": "https://oatml.cs.ox.ac.uk/",
    "keywords": "Coordination, Human-agent interaction, Markets, General-sum game theory"
  },
  {
    "name": "Soft Systems Group",
    "contact": "Jamie Roberts",
    "url": "https://softsystemsgroup.com/",
    "keywords": "Explainability, ontologies, knowledge representation, challenges and Multi - Robot Systems"
  },
  {
    "name": "Teesside University",
    "contact": "The Anh Han",
    "url": "",
    "keywords": "Evolutionary Game Theory, emergent behaviours, collective behaviours, cooperation, coordination, trust, AI regulation, incentives, complex systems, multi-layer networks, cognitive modelling, agent-based simulations"
  },
  {
    "name": "University College London",
    "contact": "Ana Basiri",
    "url": "",
    "keywords": "Mapping, localisation and exploration, Simulation techniques, tools and platforms, Machine learning"
  },
  {
    "name": "University College London",
    "contact": "Jun Wang",
    "url": "https://www.ucl.ac.uk",
    "keywords": "Area of multi-agent learning, bridging game theory with machine learning."
  },
  {
    "name": "University College London",
    "contact": "Paolo Tasca",
    "url": "http://blockchain.cs.ucl.ac.uk",
    "keywords": ""
  },
  {
    "name": "University College London",
    "contact": "Simone Righi",
    "url": "https://www.ucl.ac.uk/computer-science/research/research-groups/financial-computing-and-analytics",
    "keywords": "ABM of cooperation, ABM of the peer-review process, ABM and micro-economic decisions, ABM and Financial Markets"
  },
  {
    "name": "University of Birmingham",
    "contact": "Mohan Sridharan",
    "url": "https://www.cs.bham.ac.uk/research/groupings/robotics/",
    "keywords": "Knowledge representation and reasoning, Interactive learning, Verification"
  },
  {
    "name": "University of Birmingham",
    "contact": "Per Kristin Lehre",
    "url": "https://www.cs.bham.ac.uk/~lehrepk/",
    "keywords": "Game theory, Evolutionary algorithms, Computational complexity, Provable performance, Convergence analysis"
  },
  {
    "name": "University of Edinburgh",
    "contact": "J. Michael Herrmann",
    "url": "http://web.inf.ed.ac.uk/ipab",
    "keywords": "Swarm and collective behaviour, Multi-robot systems, Human-robot interaction and collaboration, Machine learning for robotics, Evolutionary algorithms"
  },
  {
    "name": "University of Edinburgh",
    "contact": "Kobi Gal",
    "url": "http://homepages.inf.ed.ac.uk/kgal/index.html",
    "keywords": "Human agent interactions, Learning and adaptation, innovative applications"
  },
  {
    "name": "University of Edinburgh",
    "contact": "Lukasz Szpruch",
    "url": "https://www.maths.ed.ac.uk/~lszpruch/",
    "keywords": "n-players games, optimal control, reinforcement learning"
  },
  {
    "name": "University of Edinburgh",
    "contact": "Petros Papapanagiotou",
    "url": "https://aiml.inf.ed.ac.uk/",
    "keywords": "coordination, organisations, socio-technical systems, formal verification, simulation"
  },
  {
    "name": "University of Edinburgh",
    "contact": "Sethu Vijayakumar",
    "url": "http://wcms.inf.ed.ac.uk/ipab/slmc",
    "keywords": ""
  },
  {
    "name": "University of Hertfordshire",
    "contact": "Daniel Polani",
    "url": "http://adapsys.cs.herts.ac.uk",
    "keywords": "Self-organization, collective systems, social models, multi-robot systems"
  },
  {
    "name": "University of London",
    "contact": "Argyrios Deligkas",
    "url": "https://pure.royalholloway.ac.uk/portal/en/persons/argyrios-deligkas(199c002a-f8d7-4081-84c0-437f3ae41811).html",
    "keywords": "Mechanism Design, Auctions, Non-cooperative games, Equilibrium Computation"
  },
  {
    "name": "University of Nottingham",
    "contact": "Brian Logan",
    "url": "https://www.nottingham.ac.uk/computerscience",
    "keywords": "Agent theories and models, Reasoning about knowledge, beliefs, goals, norms and strategies in multi-agent system, Verification of multi-agent systems, Programming frameworks, languages, models and abstractions for all aspects of MAS, Normative systems"
  },
  {
    "name": "University of Oxford",
    "contact": "Michael Wooldridge",
    "url": "https://www.cs.ox.ac.uk/people/michael.wooldridge/",
    "keywords": "game theoretic analysis, equilibrium analysis, agent-based simulation"
  },
  {
    "name": "University of Sheffield",
    "contact": "Roderich Gross",
    "url": "https://naturalrobotics.group.shef.ac.uk/",
    "keywords": "Swarm and collective behaviour, Multi-robot systems, Networked systems and distributed robotics, Human-robot interaction and collaboration"
  },
  {
    "name": "University of Southampton",
    "contact": "Tim Norman",
    "url": "https://www.aic.ecs.soton.ac.uk/",
    "keywords": "Trust and reputation, Normative systems, Communication and argumentation, Single- and multi-agent planning and scheduling, Reasoning about knowledge, beliefs, goals, norms and strategies in multi-agent systems"
  },
  {
    "name": "University of Warwick",
    "contact": "Arshad Jhumka",
    "url": "https://warwick.ac.uk/fac/sci/dcs/research/ai/",
    "keywords": ""
  },
  {
    "name": "University of Warwick",
    "contact": "Giovanni Montana",
    "url": "https://warwick.ac.uk/fac/sci/wmg/research/digital/datascience",
    "keywords": "Reinforcement learning, multi-agent systems, robotics"
  },
  {
    "name": "University of Warwick",
    "contact": "Nathan Griffiths",
    "url": "https://warwick.ac.uk/fac/sci/dcs/research/ai/",
    "keywords": "Norm emergence, Trust and reputation, Social agent models, Machine and multi-agent learning, Agent-based simulation"
  },
  {
    "name": "University of Warwick",
    "contact": "Paolo Turrini",
    "url": "https://warwick.ac.uk/fac/sci/dcs/research/ai/",
    "keywords": "Game Theory, Logic, Algorithms, Networks, Knowledge"
  },
  {
    "name": "Vivacity Labs",
    "contact": "Shaun Howell",
    "url": "https://vivacitylabs.com",
    "keywords": "Traffic, RL, ML, optimal control"
  },
  {
    "name": "Whiteson Research Lab",
    "contact": "Shimon Whiteson",
    "url": "http://whirl.cs.ox.ac.uk/",
    "keywords": "Deep Reinforcement Learning, Multi-Agent Reinforcement Learning, Meta Reinforcement Learning, Bayesian Reinforcement Learning"
  }
];
