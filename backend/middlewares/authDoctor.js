import jwt from "jsonwebtoken";


const authDoc = async (req, res, next) => {
    try {
        const { doctoken } = req.headers
        if (!doctoken) {
            return res.status(401).json({ msg: "No token, authorization denied 😵‍💫", success: false });
        }
        const token_decoded = jwt.verify(doctoken, process.env.JWT_SECRET)
        req.body.docId = token_decoded.id
        // Proceed to the next middleware
        next();
    } catch (error) {
        console.error("Error:", error.message); // Log error for debugging
        return res.status(400).json({ msg: "Invalid User 🙄", success: false });
    }
};
export default authDoc;
