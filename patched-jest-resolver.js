const { createTransform } = require('jest-resolver');

const patchedResolver = {
  async resolveFileResource(
    this: any,
    resource: string,
    context: any,
  ) {
    // This code will resolve the resource using the default resolver
    const result = await this.resolver.resolveFileResource(resource, context);
    if (result) {
      return result;
    }
    // If the resource is not found, try to resolve it using the patched resolver
    const patchedResource = await createTransform(
      resource,
      context,
      this,
    );
    if (patchedResource) {
      return patchedResource;
    }
  },
};

module.exports = patchedResolver;