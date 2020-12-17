import { Code, LayerVersion, Runtime } from '@aws-cdk/aws-lambda'
import { App, CfnOutput, Stack } from '@aws-cdk/core'
import { name } from '../package.json'

const app = new App()

const stack = new Stack(app, 'AWSLambdaLayerPopplerStack', {
  stackName: name,
})

const layer = new LayerVersion(stack, 'AWSLambdaLayerPopplerLayerVersion', {
  code: Code.fromAsset('./opt.zip'),
  compatibleRuntimes: [
    Runtime.JAVA_11,
    Runtime.NODEJS_10_X,
    Runtime.NODEJS_12_X,
    Runtime.PYTHON_3_8,
  ],
  layerVersionName: name,
})

new CfnOutput(stack, 'AWSLambdaLayerPopplerLayerVersionArnOutput', {
  exportName: `${stack.stackName}-layer-version-arn`,
  value: layer.layerVersionArn,
})

app.synth()
