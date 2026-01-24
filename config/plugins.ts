export default ({ env }) => ({
  upload: {
    config: {
      provider: '@strapi/provider-upload-aws-s3',
      providerOptions: {
        baseUrl: env('R2_CUSTOM_DOMAIN') as string | undefined, // optional
        s3Options: {
          credentials: {
            accessKeyId: env('AWS_ACCESS_KEY_ID') as string,
            secretAccessKey: env('AWS_SECRET_ACCESS_KEY') as string,
          },
          region: env('AWS_REGION', 'auto') as string,
          endpoint: env('AWS_ENDPOINT') as string,
          params: {
            ACL: env('AWS_ACL', 'public-read') as string,
            signedUrlExpires: Number(env('AWS_SIGNED_URL_EXPIRES', 15 * 60)),
            Bucket: env('AWS_BUCKET') as string,
          },
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});
