import { motion } from "framer-motion"

const Test = (props) => {
    return <>
        <motion.p 
            animate={{ scale: 2, x: 100 }}
            transition={{ type: "spring", duration: 1 }}>
            Hello World
        </motion.p>
    </>
}

export default Test