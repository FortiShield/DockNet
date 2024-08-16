/**
 * Docknet API
 * Functionality to create and manage projects, services, jobs, and files.
 *
 * The version of the OpenAPI document: 0.0.22
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Extension from '../model/Extension';
import ExtensionInput from '../model/ExtensionInput';
import ProblemDetails from '../model/ProblemDetails';

/**
 * Extensions service.
 * @module api/ExtensionsApi
 * @version 0.0.22
 */
export default class ExtensionsApi {
  /**
   * Constructs a new ExtensionsApi.
   * @alias module:api/ExtensionsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }

  /**
   * Delete extension.
   * Deletes an extension.  This will delete the installation metadata as well as the service container.
   * @param {String} projectId A valid project ID.
   * @param {String} extensionId A valid extension ID.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */
  deleteExtensionWithHttpInfo(projectId, extensionId) {
    let postBody = null;
    // verify the required parameter 'projectId' is set
    if (projectId === undefined || projectId === null) {
      throw new Error(
        "Missing the required parameter 'projectId' when calling deleteExtension"
      );
    }
    // verify the required parameter 'extensionId' is set
    if (extensionId === undefined || extensionId === null) {
      throw new Error(
        "Missing the required parameter 'extensionId' when calling deleteExtension"
      );
    }

    let pathParams = {
      project_id: projectId,
      extension_id: extensionId,
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = [
      'APIKeyCookie',
      'APIKeyHeader',
      'APIKeyQuery',
      'OAuth2PasswordBearer',
    ];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = null;
    return this.apiClient.callApi(
      '/projects/{project_id}/extensions/{extension_id}',
      'DELETE',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType,
      null
    );
  }

  /**
   * Delete extension.
   * Deletes an extension.  This will delete the installation metadata as well as the service container.
   * @param {String} projectId A valid project ID.
   * @param {String} extensionId A valid extension ID.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  deleteExtension(projectId, extensionId) {
    return this.deleteExtensionWithHttpInfo(projectId, extensionId).then(
      function (response_and_data) {
        return response_and_data.data;
      }
    );
  }

  /**
   * Get extension metadata.
   * Returns the metadata of the given extension.
   * @param {String} projectId A valid project ID.
   * @param {String} extensionId A valid extension ID.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Extension} and HTTP response
   */
  getExtensionMetadataWithHttpInfo(projectId, extensionId) {
    let postBody = null;
    // verify the required parameter 'projectId' is set
    if (projectId === undefined || projectId === null) {
      throw new Error(
        "Missing the required parameter 'projectId' when calling getExtensionMetadata"
      );
    }
    // verify the required parameter 'extensionId' is set
    if (extensionId === undefined || extensionId === null) {
      throw new Error(
        "Missing the required parameter 'extensionId' when calling getExtensionMetadata"
      );
    }

    let pathParams = {
      project_id: projectId,
      extension_id: extensionId,
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = [
      'APIKeyCookie',
      'APIKeyHeader',
      'APIKeyQuery',
      'OAuth2PasswordBearer',
    ];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = Extension;
    return this.apiClient.callApi(
      '/projects/{project_id}/extensions/{extension_id}',
      'GET',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType,
      null
    );
  }

  /**
   * Get extension metadata.
   * Returns the metadata of the given extension.
   * @param {String} projectId A valid project ID.
   * @param {String} extensionId A valid extension ID.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Extension}
   */
  getExtensionMetadata(projectId, extensionId) {
    return this.getExtensionMetadataWithHttpInfo(projectId, extensionId).then(
      function (response_and_data) {
        return response_and_data.data;
      }
    );
  }

  /**
   * Install extension.
   * Installs an extension for the given project.  This will deploy the extension container for the selected project and registers the extension for all the specified capabilities.
   * @param {String} projectId A valid project ID.
   * @param {module:model/ExtensionInput} extensionInput
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Extension} and HTTP response
   */
  installExtensionWithHttpInfo(projectId, extensionInput) {
    let postBody = extensionInput;
    // verify the required parameter 'projectId' is set
    if (projectId === undefined || projectId === null) {
      throw new Error(
        "Missing the required parameter 'projectId' when calling installExtension"
      );
    }
    // verify the required parameter 'extensionInput' is set
    if (extensionInput === undefined || extensionInput === null) {
      throw new Error(
        "Missing the required parameter 'extensionInput' when calling installExtension"
      );
    }

    let pathParams = {
      project_id: projectId,
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = [
      'APIKeyCookie',
      'APIKeyHeader',
      'APIKeyQuery',
      'OAuth2PasswordBearer',
    ];
    let contentTypes = ['application/json'];
    let accepts = ['application/json'];
    let returnType = Extension;
    return this.apiClient.callApi(
      '/projects/{project_id}/extensions',
      'POST',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType,
      null
    );
  }

  /**
   * Install extension.
   * Installs an extension for the given project.  This will deploy the extension container for the selected project and registers the extension for all the specified capabilities.
   * @param {String} projectId A valid project ID.
   * @param {module:model/ExtensionInput} extensionInput
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Extension}
   */
  installExtension(projectId, extensionInput) {
    return this.installExtensionWithHttpInfo(projectId, extensionInput).then(
      function (response_and_data) {
        return response_and_data.data;
      }
    );
  }

  /**
   * List extensions.
   * Returns all installed extensions accesible by the specified project.  This also includes all extensions which are installed globally as well as extensions installed by the authorized user.
   * @param {String} projectId A valid project ID.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Extension>} and HTTP response
   */
  listExtensionsWithHttpInfo(projectId) {
    let postBody = null;
    // verify the required parameter 'projectId' is set
    if (projectId === undefined || projectId === null) {
      throw new Error(
        "Missing the required parameter 'projectId' when calling listExtensions"
      );
    }

    let pathParams = {
      project_id: projectId,
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = [
      'APIKeyCookie',
      'APIKeyHeader',
      'APIKeyQuery',
      'OAuth2PasswordBearer',
    ];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = [Extension];
    return this.apiClient.callApi(
      '/projects/{project_id}/extensions',
      'GET',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType,
      null
    );
  }

  /**
   * List extensions.
   * Returns all installed extensions accesible by the specified project.  This also includes all extensions which are installed globally as well as extensions installed by the authorized user.
   * @param {String} projectId A valid project ID.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Extension>}
   */
  listExtensions(projectId) {
    return this.listExtensionsWithHttpInfo(projectId).then(function (
      response_and_data
    ) {
      return response_and_data.data;
    });
  }

  /**
   * Suggest extension configuration.
   * Suggests an input configuration based on the provided `container_image`.  The suggestion is based on metadata extracted from the container image (e.g. labels) as well as suggestions based on previous project deployments with the same image.
   * @param {String} projectId A valid project ID.
   * @param {String} containerImage Container image to use for suggestion.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ExtensionInput} and HTTP response
   */
  suggestExtensionConfigWithHttpInfo(projectId, containerImage) {
    let postBody = null;
    // verify the required parameter 'projectId' is set
    if (projectId === undefined || projectId === null) {
      throw new Error(
        "Missing the required parameter 'projectId' when calling suggestExtensionConfig"
      );
    }
    // verify the required parameter 'containerImage' is set
    if (containerImage === undefined || containerImage === null) {
      throw new Error(
        "Missing the required parameter 'containerImage' when calling suggestExtensionConfig"
      );
    }

    let pathParams = {
      project_id: projectId,
    };
    let queryParams = {
      container_image: containerImage,
    };
    let headerParams = {};
    let formParams = {};

    let authNames = [
      'APIKeyCookie',
      'APIKeyHeader',
      'APIKeyQuery',
      'OAuth2PasswordBearer',
    ];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = ExtensionInput;
    return this.apiClient.callApi(
      '/projects/{project_id}/extensions:suggest-config',
      'GET',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType,
      null
    );
  }

  /**
   * Suggest extension configuration.
   * Suggests an input configuration based on the provided `container_image`.  The suggestion is based on metadata extracted from the container image (e.g. labels) as well as suggestions based on previous project deployments with the same image.
   * @param {String} projectId A valid project ID.
   * @param {String} containerImage Container image to use for suggestion.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ExtensionInput}
   */
  suggestExtensionConfig(projectId, containerImage) {
    return this.suggestExtensionConfigWithHttpInfo(
      projectId,
      containerImage
    ).then(function (response_and_data) {
      return response_and_data.data;
    });
  }
}
