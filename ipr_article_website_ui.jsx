import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function IPRArticle() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl w-full"
      >
        <Card className="rounded-2xl shadow-lg">
          <CardContent className="p-8">
            <h1 className="text-3xl font-bold mb-2">
              Need for Intellectual Property Rights (IPR)
            </h1>
            <p className="text-gray-500 mb-6">By Your Name</p>

            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Abstract</h2>
              <p className="text-gray-700">
                Intellectual Property Rights (IPR) play a crucial role in fostering
                innovation and economic growth. This article explores the
                importance of IPR and its contribution to national development.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Introduction</h2>
              <p className="text-gray-700">
                In a knowledge-driven economy, intellectual property has become
                a valuable asset. IPR provides legal protection to creators,
                enabling innovation and ensuring fair competition in the
                global market.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Need for IPR</h2>
              <p className="text-gray-700">
                IPR protects intellectual efforts from unauthorized use. It
                encourages creators to innovate by granting exclusive rights
                and helps maintain market authenticity and trust.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Role in National Development</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Encourages innovation and creativity</li>
                <li>Attracts foreign direct investment</li>
                <li>Promotes technology transfer</li>
                <li>Supports small and medium enterprises</li>
                <li>Enhances cultural industries</li>
              </ul>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Challenges</h2>
              <p className="text-gray-700">
                Challenges include lack of awareness, piracy, high costs, and
                enforcement issues. Balancing protection with public interest
                remains essential.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">Conclusion</h2>
              <p className="text-gray-700">
                IPR is a powerful tool for national development. A strong and
                balanced IPR system can drive innovation, economic growth, and
                global competitiveness.
              </p>
            </section>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
