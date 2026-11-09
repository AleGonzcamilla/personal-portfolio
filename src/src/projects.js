// To add a project: copy one object, change the fields, done.
// slides: image filenames (relative to base) or "yt:VIDEO_ID" for YouTube.
// cats: space-separated, must match the tab filters in index.html.
module.exports = [
  {
    id: 'hand', cats: 'research work', cover: 'handrender.jpg',
    title: 'Soft Dexterous Hand', meta: 'research, haptics, tendon-driven, soft robotics',
    base: 'dexkit/',
    slides: ['dexkitv1v2.png', 'handpeace.jpg', 'yt:8gC34rwUd-k' ],
    bullets: [
      `Research project designing an <b>endoskeleton</b> for the soft robotic hand of <b>DexKit</b>, an educational robotics platform.`,
      `Combined <b>rigid structural elements</b> inside a soft hand architecture, improving structural integrity, effective force and overall performance.`,
      `Made manufacturing and assembly <b>far easier and more repeatable</b> compared to a fully soft design.`,
      `Designed the bone geometry to be <b>modular</b>, so alternative materials or structural changes can be tested in future experiments.`,
      `Integrated <b>extensor tendons</b> in the hand without requiring additional motors.` 
    ],
    tags: ['foam casting', 'haptics', 'dexterous manipulation', 'soft robotics', 'biomimetic', 'educational robotics']
  },

  {
    id: 'home', cats: 'competitions research', cover: 'robot.jpg',
    title: 'Omnidirectional Service Robot', meta: 'RoboCup @Home, holonomic robots, robot structure',
    base: 'ServiceRobot/',
    slides: ['irlRobot.jpg','acrylicRobot.png','yt:28Ytq9ULG4c'],
    bullets: [
      `<b>Led a team of 20</b> engineering undergrads in the development of the service robot.`,
      `Designed and deploy a <b>custom mecanum omnidirectional base</b> for the robot.`,
      `Manufactured a <b>metal</b> cover to protect the robot's internal components, designed with SolidWorks <b>sheet metal</b> features.`,
      `Used <b>weldments</b> to design a new robot internal structure that maximizes height without compromising stability.`,
      `Redesigned the cover in <b>acrylic</b> sheets, which improved paint finish.`,
      `Competed internationally in RoboCup @Home 2025 and 2026, <a href="https://drive.google.com/file/d/1J5ykE0HPEXrEA-ywQsCNaChVEBFtjO_-/view" target="_blank" rel="noopener noreferrer">Team Description Paper</a> .`
    ],
    tags: ['sheetmetal', 'weldments', 'URDF-xacro', 'project management']
  },

  {
    id: 'gripper', cats: 'competitions', cover: 'Gripper.gif',
    title: '2-Finger Parallel Gripper', meta: 'RoboCup @Home, ROS2',
    base: 'Gripper/',
    slides: ['gripperGraspingPositions.png', 'yt:0mFP49CI3dk'],
    bullets: [
      `Designed and <b>3D printed</b> a 2-finger parallel gripper able to hold a variety of household objects.`,
      `Used a <b>custom mold</b> to cast silicone rubber pads for the fingers, increasing friction and grip.`,
      `Created and tested the <b>URDF</b> and xacro files for <b>ROS2</b> and a node that publishes the gripper's <b>sensors</b> state.`,
      `Competed internationally in RoboCup @Home 2025 and 2026, <a href="https://drive.google.com/file/d/1J5ykE0HPEXrEA-ywQsCNaChVEBFtjO_-/view" target="_blank" rel="noopener noreferrer">Team Description Paper</a> .`,
      `Open-source design:  <a href="https://grabcad.com/library/robotic-gripper-34" target="_blank" rel="noopener noreferrer">https://grabcad.com/library/robotic-gripper-34</a>`
    ],
    tags: ['3D molds', 'tactile sensing', 'URDF-xacro', 'ROS2']
  },

  {
    id: 'maze', cats: 'competitions', cover: 'Maze.jpg',
    title: 'Rescue Maze Robot', meta: 'RoboCup Junior, mechanical design',
    base: 'Maze Robot/',
    slides: ['earlyDesign.jpg', '2doLugar.jpg', 'finishedDesign.jpg', 'yt:2oSYpGb6yf8'],
    bullets: [
      `Designed and built a robot that autonomously solves mazes and crosses small stairs, speed bumps and ramps.`,
      `Modeled in <b>SolidWorks</b>; manufactured with 3D printed parts and laser-cut MDF.`,
      `Rack and pinion mechanism for dispensing small boxes.`,
      `Designed <b>TPU wheels</b> that work as suspension so the robot can cross obstacles.`,
      `2nd place in the national RoboCup Junior Rescue Maze competition.`
    ],
    tags: ['3D modeling', 'rapid prototyping', '3D printing', 'robotics']
  },

  {
    id: 'onstage', cats: 'competitions', cover: 'performingRobots.gif',
    title: 'Performing Robots', meta: 'RoboCup OnStage, animatronics',
    base: 'Performing Robots/',
    slides: ['yt:nb9xt6Dmxxw', 'yt:mUYb6li2m9s', 'scrat.png', 'icebergs.png', 'yt:tRqyR_EXFCI'],
    bullets: [
      `Designed and built several robots for <b>RoboCup OnStage</b>, each giving a performance around a theme.`,
      `Designed and printed a head able to express different emotions for the Sullivan (Monsters Inc.) robot.`,
      `Wiring and cable management for each of the robot's <b>electronics</b>.`,
      `<b>Arduino</b> programming for the servomotor movements.`,
      `Modeled the Scrat (Ice Age) robot in <b>Fusion 360</b>, planning for limited space from the start.`,
      `Designed costumes for easy disassembly, good looks and cooling of internal components.`
    ],
    tags: ['arduino', '3D printing', '3D modeling', 'electronics', 'costume design']
  },
  {
    id: 'tractor', cats: 'school', cover: 'TractorRender.jpg',
    title: 'Autonomous Tractor', meta: 'John Deere Industrial Automation',
    base: 'Tractor/',
    slides: ['irlTractor.png', 'fromBelow.png', 'yt:UC1GtNW29QA'],
    bullets: [
      `Designed and built an autonomous tractor for the John Deere Industrial Automation course.`,
      `Integrated <b>ackerman steering</b> and a <b>suspension system</b>.`,
      `Apply <b>PID control</b> in a <b>STM32F103RB</b> for the tractor to follow a predefined course.`,
      `Open-source design:  <a href="https://grabcad.com/library/john-deere-mini-tractor-model-1" target="_blank" rel="noopener noreferrer">https://grabcad.com/library/john-deere-mini-tractor-model-1</a>`
    ],
    tags: ['STM', 'ackerman steering', 'suspension system', 'control']
  },
  {
    id: 'chicken', cats: 'work', cover: 'ParvadaMachine.gif',
    title: 'Parvada Chicken Sexing Machine', meta: 'Professional experience, mechanical design engineer',
    base: 'parvada/',
    slides: ['AluminumRender.png', 'ssMachine.jpg'],
    bullets: [
      `Designed for Parvada, a company specialized in poultry industry automation.`,
      `Designed several <b>functional</b> iterations of a machine that separates between male and female chickens.`,
      `<b>Quote designs with international suppliers</b>`
    ],
    tags: ['Prototype iteration', 'manufacturing', 'technical drawings', 'stainless steel sheet metal design', 'weldments design']
  },
  {
    id: 'adanPaper', cats: 'research', cover: 'paper.png',
    title: 'Immersive Cognitive Factory Twin', meta: 'research, digital twin, simulation',
    base: 'paper/',
    slides: ['ProcessExplained.png'],
    bullets: [
      'Co-authored the published paper: <a href="https://doi.org/10.1080/21693277.2026.2664909" target="_blank" rel="noopener noreferrer">Immersive cognitive factory twin: Optimizing Industry 5.0 with an integrated VR, ML, and LLM framework</a> (2026).',
      'Developed 3D assets and virtual representations of manufacturing workstations and components for a Unity-based factory simulator.',
      'Contributed to research, methodology, and validation for an immersive factory simulation integrating VR, ML, and LLMs.'
    ],
    tags: ['Unity', 'Industry 5.0', 'research', 'smart manufacturing', 'digital twin']
  },
  {
    id: 'heater', cats: 'school', cover: 'TractorGIF.gif',
    title: 'Cabin Heater Control for John Deere', meta: 'Analog circuit, Proteus',
    base: 'CabinHeater/',
    slides: ['ProteusPractice_page-0001.jpg', 'protoCircuit.jpg', 'CADinterior.png', 'finishedTractor.jpg', 'blockDiagram.png'],
    bullets: [
      `Analog cabin heater control for a John Deere tractor, built for the Troubleshooting Processes course.`,
      `Designed the circuit in <b>Proteus</b>: op-amp filters, <b>comparators with hysteresis</b> and on/off control.`,
      `Designed the enclosure and interior panel in <b>SolidWorks</b>, considering air flow and heat.`,
      `Assembled and tested the full system in a tractor cabin mockup.`
    ],
    tags: ['opamp', 'sheet metal design', 'filters', 'electronic circuits', 'soldering', 'crimping', 'on/off control', 'Proteus']
  },
  {
    id: 'conveyor', cats: 'work', cover: 'Conveyor.gif',
    title: 'Parvada Conveyor Design', meta: 'Professional experience, weldments',
    base: 'Conveyor/',
    slides: ['Render.png', 'ZoomIn.png', 'Weldments.png'],
    bullets: [
      `Designed a conveyor for Parvada, a company specialized in poultry industry automation.`,
      `Carries up to 36 kg.`,
      `Includes height-adjustable legs, a control panel and belt tensioners.`,
      `Worked within weight, size and <b>manufacturing constraints</b>.`
    ],
    tags: ['CAD', 'SolidWorks', 'assembly', 'technical drawings', 'mechanical design', 'weldments design']
  },
  {
    id: 'motor', cats: 'school', cover: 'MotorMotionGif.gif',
    title: 'Electric Motor', meta: 'Electromagnetism course',
    base: 'Electric Motor/',
    slides: ['explodedMotor.gif', 'semiAssembledMotor.png', 'motorTerminado.jpg'],
    bullets: [
      `Designed a custom electric motor (stator, rotor and housing) for an Electromagnetism course.`,
      `The design allowed <b>easy modifications</b>, since parts like the magnets were still undefined.`,
      `Lifted 425 grams, the greatest torque in the class.`,
      `Reached 680 rpm at 5.38 V and 2.4 A.`,
      `Open-source design:  <a href="https://grabcad.com/library/electric-motor-prototype-1" target="_blank" rel="noopener noreferrer">https://grabcad.com/library/electric-motor-prototype-1</a>`
    ],
    tags: ['3D printing', '3D modeling', 'electromagnetism']
  },
  {
    id: 'goalkeeper', cats: 'school', cover: 'goalkepperGame.jpg',
    title: 'Goal-keeper Game', meta: 'Arduino, laser cutting',
    base: 'Goal-kepper game/',
    slides: ['yt:Ie60nSlcaqw', 'CADscreenshotTransparent.png', 'CADscreenshot.png', 'DXFtoCut.jpg'],
    bullets: [
      `Final project for "Implementation of Mechatronic Systems".`,
      `Designed in <b>SolidWorks</b> a robotic goalkeeper that blocks balls thrown by three other goalkeepers.`,
      `Used patterns on <b>laser-cut</b> MDF to get curved shapes for the cover.`,
      `<b>Arduino</b> programming of the stepper motor, with interrupts for the limit switches.`,
      `Soldered the electronics for secure connections.`
    ],
    tags: ['electronics', 'arduino', 'rapid prototyping', 'CAD', 'laser cutting']
  },
  {
    id: 'cart', cats: 'school', cover: 'ecoFriendlyCart.jpg',
    title: 'Eco-friendly Toy Cart', meta: 'Sheet metal, DOE',
    base: 'Eco-friendly toy cart/',
    slides: ['RenderFinalCart.png', 'unfolded.jpg', 'multipleCarts.jpg', 'disasembledCart.jpg'],
    bullets: [
      `Eco-friendly toy cart for "Design and Analysis of Experiments in Engineering Innovation".`,
      `Designed in <b>SolidWorks</b> with <b>sheet metal</b> features; powered by a rubber band mechanism.`,
      `Used <b>Design of Experiments</b> and <b>JMP</b> to maximize the distance traveled.`,
      `Cut from cardboard with a <b>laser</b>; assembles and disassembles without adhesives.`,
      `Applied <b>design thinking</b> to keep the final user in mind.`,
      `The 8 carts produced were donated to the social service "ITERAndo con Javer".`
    ],
    tags: ['sheetmetal', 'DOE', 'JMP', 'laser cutting', 'design thinking']
  },
  {
    id: 'acsensor', cats: 'school', cover: 'AC_sensor.png',
    title: 'AC-sensor Case', meta: 'Structural analysis, weldments, LabView',
    base: 'AC-sensor case/',
    slides: ['side2.jpg', 'structural analysis.jpg', 'labview.jpg' ],
    bullets: [
      `Design and built a case for an AC sensor, for the "Mechatronics Integration" course.`,
      `Used <b>SolidWorks weldments</b> for a robust, lightweight, easy-to-manufacture case.`,
      `The case withstands 100 kg, verified with a <b>structural analysis</b>.`,
      `Built a <b>LabView</b> interface showing real-time sensor data.`
    ],
    tags: ['weldments', 'LabView', 'structural analysis']
  }
];
