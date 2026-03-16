"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";

export default function SageMakerPost() {
  return (
    <div className="min-h-screen max-w-3xl mx-auto px-6 pt-28 pb-20">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary mb-8 transition-colors">
          <ArrowLeft size={14} /> Back to blog
        </Link>

        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-text-secondary">Dec 2024</span>
            <span className="flex items-center gap-1 text-xs text-text-secondary"><Clock size={11} /> 7 min read</span>
          </div>
          <h1 className="text-3xl font-bold text-text-primary mb-4">Deploying ML Models with AWS SageMaker</h1>
          <div className="flex flex-wrap gap-2">
            {["AWS", "MLOps", "SageMaker"].map((tag) => (
              <span key={tag} className="text-xs font-mono px-2 py-0.5 rounded bg-bg-secondary border border-border text-text-secondary">{tag}</span>
            ))}
          </div>
        </div>

        <article className="space-y-6">
          <p className="text-sm text-text-secondary leading-relaxed">
            Getting an ML model from a Jupyter notebook into production is one of the
            most underestimated engineering challenges. SageMaker provides a managed
            path that handles a lot of the heavy lifting — but understanding when and
            how to use its serverless capabilities is critical.
          </p>

          <h2 className="text-base font-semibold text-text-primary mt-8 mb-3">Why Serverless Inference</h2>
          <p className="text-sm text-text-secondary leading-relaxed">
            SageMaker&apos;s standard real-time endpoints use always-on instances — you pay
            whether or not requests are coming in. Serverless endpoints scale to zero,
            charging only for invocations and compute time. For low-to-medium traffic
            workloads, this reduces costs dramatically.
          </p>

          <h2 className="text-base font-semibold text-text-primary mt-8 mb-3">Deployment Steps</h2>
          <pre className="text-xs">{`import boto3
import sagemaker
from sagemaker.model import Model

session = sagemaker.Session()

# 1. Upload model artifacts to S3
model_data = session.upload_data(
    'model.tar.gz',
    bucket='my-bucket',
    key_prefix='models/v1'
)

# 2. Create SageMaker Model
model = Model(
    image_uri=container_image,
    model_data=model_data,
    role=role,
)

# 3. Deploy serverless endpoint
predictor = model.deploy(
    serverless_inference_config=ServerlessInferenceConfig(
        memory_size_in_mb=3008,
        max_concurrency=5,
    )
)

# 4. Run inference
response = predictor.predict(payload)`}</pre>

          <h2 className="text-base font-semibold text-text-primary mt-8 mb-3">Cold Start Mitigation</h2>
          <p className="text-sm text-text-secondary leading-relaxed">
            Serverless endpoints have cold starts — the first request after a period of
            inactivity incurs container initialization time (typically 2–10 seconds).
            Minimize this by keeping container images small, pre-loading model weights
            at container start, and warming the endpoint with scheduled pings if latency
            is critical.
          </p>
        </article>
      </motion.div>
    </div>
  );
}
