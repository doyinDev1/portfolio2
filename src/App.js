import './App.css';
import { motion } from 'framer-motion'
function App() {
  return (
    <>
      <body>
        <div class="loading"></div>

        <motion.section class="header"
          initial={{ y: "-80vh" }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 120 }}
        >
          <div class="column-left">
            <h2 class="logo-type">Adedoyin Oyebanji</h2>
          </div>
          <div class="column-main">
            <h3 class="header-services">🚀Frontend Developer🚀</h3>
            <div class="column-right header-contact">
              <a href="mailto:adedoyin27@gmail.com" class="text-light"
              >adedoyin27@gmail.com</a>
            </div>
          </div>
        </motion.section>

        <motion.section class="tools"
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
        >
          <div class="column-left">
            <h2>Tools I Use</h2>
          </div>
          <div class="column-main">
            <div class="column-main-container-large">
              <h1>
                HTML, CSS, Javascript, React, NextJs, TailwindCSS, Node, Express</h1>
            </div>
          </div>
        </motion.section>

        <motion.section class="tools"
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div class="column-left">
            <h2>Projects</h2>
          </div>
          <div class="column-main">
            <div class="column-main-container-large">
              <h1>
                I have built,
                <motion.a
                  href="https://serviceschoolhouse.com/"
                  class="text-light"
                  whileHover={{ scale: 1.04, originX: 0, }}
                  transiton={{ type: "spring", stiffness: 300 }}
                >SERVICE SCHOOL HOUSE - An Onboarding App for Staffing and Training Customer Care
                  Agents</motion.a>,

                <motion.a href="https://testassessify.com/"
                  class="text-light"
                  whileHover={{ scale: 1.04, originX: 0, }}
                  transiton={{ type: "spring", stiffness: 300 }}
                >TEST ASSESSIFY - An Assessment and Screening app for hiring the
                  best candidates for a recruitment process</motion.a>,
                <motion.a
                  href="https://accesscoaching.loremexcellentiam.com/"
                  class="text-light"
                  whileHover={{ scale: 1.04, originX: 0, }}
                  transiton={{ type: "spring", stiffness: 300 }}
                >ACCESS COACHING - An Ed-Tech App for Access Bank with Special
                  Curriculum for Training Employees</motion.a>,

                <motion.a
                  href="https://customerservice.roleplaycareers.com/"
                  class="text-light"
                  whileHover={{ scale: 1.04, originX: 0, }}
                  transiton={{ type: "spring", stiffness: 300 }}
                >ROLEPLAY - An Ed-Tech App to train Staffs on Roleplay Careers</motion.a
                >,

                <motion.a href="https://steamfest.9ijakids.com/"
                  class="text-light"
                  whileHover={{ scale: 1.04, originX: 0, }}
                  transiton={{ type: "spring", stiffness: 300 }}
                >STEAMFEST - A Fun Festival for kids with opportunity to explore
                  Science, Technology, Engineering, Arts and Math (STEAM)</motion.a
                >,

                <motion.a href="https://digift-doyindev1.vercel.app/"
                  class="text-light"
                  whileHover={{ scale: 1.04, originX: 0, }}
                  transiton={{ type: "spring", stiffness: 300 }}
                >DIGIFT - Gift Card Purchase App</motion.a
                >,
                <motion.a
                  href="https://breet-doyindev1.vercel.app/"
                  class="text-light"
                  whileHover={{ scale: 1.04, originX: 0, }}
                  transiton={{ type: "spring", stiffness: 300 }}
                >CryptoCurrency Platform Dashboard Demo For Nigerians &#38; Ghanaians</motion.a
                >,
                <motion.a href="https://connectifie.com"
                  class="text-light"
                  whileHover={{ scale: 1.04, originX: 0, }}
                  transiton={{ type: "spring", stiffness: 300 }}
                >CONNECTIFIE - A Research Company Landing Page &#38; Blog</motion.a
                >


                {/* <a href="https://zyhon96.github.io/doyinflix/" class="text-light"
                >Movie Rental App</a
                >, */}
                {/* <a href="https://zyhon96.github.io/bitclone/" class="text-light"
                >A Crypto StartUp Landing Page</a
                >, */}


                {/* <a href="https://zyhon96.github.io/clone/" class="text-light"
                >Sample Portfolio for Freelancers</a
                >, */}
                {/* and
                <motion.a
                  href="https://zyhon96.github.io/bitcoin-tracker/"
                  class="text-light"
                  whileHover={{ scale: 1.04, originX: 0, }}
                  transiton={{ type: "spring", stiffness: 300 }}
                >a Cryptocurrency Tracker in Naira</motion.a
                > */}
                {/* ,
                <motion.a href="https://zyhon96.github.io/twitter-ad/" 
                class="text-light"
                 whileHover={{scale: 1.04, originX: 0,}}
                 transiton={{type: "spring", stiffness: 300}}
                >a Twitter Campaign Site</motion.a
                > */}

                {/* <a href="https://zyhon96.github.io/Fiber-app/" class="text-light"
                >a Portfolio Generator Landing Page</a
                > */}
              </h1>
            </div>
          </div>
        </motion.section>
        <section class="tools">
          <div class="column-left">
            <h2>Services</h2>
          </div>
          <div class="column-main">
            <div class="column-main-container-large">
              <h1>FrontEnd Development, SEO Expert</h1>
            </div>
          </div>
        </section>

        <section class="tools">
          <div class="column-left">
            <h2>Resume</h2>
          </div>
          <div class="column-main">
            <div class="column-main-container-large">
              <h1>
                <a href="#" style={{ color: "white" }}> My Resume {'>>'} </a>
                <a
                  href="./ADEDOYIN FRONTEND DEV Resume.pdf"
                  download="ADEDOYIN FRONTEND DEV Resume.pdf"
                > {" "}Download</a
                >
              </h1>
            </div>
          </div>
        </section>

        <section class="tools">
          <div class="column-left">
            <h2>My Links</h2>
          </div>
          <div class="column-main">
            <div class="column-main-container-large">
              <h1>
                <a href="https://github.com/doyindev1" class="text-light"
                >Github,</a
                >
                <a href="https://twitter.com/theOnlyDoyin" class="text-light"
                >Twitter,</a
                >
                <a
                  href="https://www.linkedin.com/in/adedoyin-oyebanji-949a13165/"
                  class="text-light"
                >LinkedIn</a
                >
              </h1>
            </div>
          </div>
        </section>

        <section class="footer">
          <div class="column-left"></div>
          <div class="column-main">
            <h3 class="footer-text">
              Adedoyin Oyebanji. All Rights Reserved &copy; 2022.
            </h3>
          </div>
        </section>
      </body>
    </>

  );
}

export default App;
