/**
 * Docknet API
 * Functionality to create and manage projects, services, jobs, and files.
 *
 * The version of the OpenAPI document: 0.0.0.dev1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import DeploymentCompute from './DeploymentCompute';

/**
 * The Compute model module.
 * @module model/Compute
 * @version 0.0.0.dev1
 */
class Compute {
    /**
     * Constructs a new <code>Compute</code>.
     * Compute instructions and limitations for this deployment.
     * @alias module:model/Compute
     * @implements module:model/DeploymentCompute
     */
    constructor() { 
        DeploymentCompute.initialize(this);
        Compute.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Compute</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Compute} obj Optional instance to populate.
     * @return {module:model/Compute} The populated <code>Compute</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Compute();
            DeploymentCompute.constructFromObject(data, obj);

            if (data.hasOwnProperty('min_cpus')) {
                obj['min_cpus'] = ApiClient.convertToType(data['min_cpus'], 'Number');
            }
            if (data.hasOwnProperty('max_cpus')) {
                obj['max_cpus'] = ApiClient.convertToType(data['max_cpus'], 'Number');
            }
            if (data.hasOwnProperty('min_memory')) {
                obj['min_memory'] = ApiClient.convertToType(data['min_memory'], 'Number');
            }
            if (data.hasOwnProperty('max_memory')) {
                obj['max_memory'] = ApiClient.convertToType(data['max_memory'], 'Number');
            }
            if (data.hasOwnProperty('min_gpus')) {
                obj['min_gpus'] = ApiClient.convertToType(data['min_gpus'], 'Number');
            }
            if (data.hasOwnProperty('max_gpus')) {
                obj['max_gpus'] = ApiClient.convertToType(data['max_gpus'], 'Number');
            }
            if (data.hasOwnProperty('volume_path')) {
                obj['volume_path'] = ApiClient.convertToType(data['volume_path'], 'String');
            }
            if (data.hasOwnProperty('max_volume_size')) {
                obj['max_volume_size'] = ApiClient.convertToType(data['max_volume_size'], 'Number');
            }
            if (data.hasOwnProperty('max_container_size')) {
                obj['max_container_size'] = ApiClient.convertToType(data['max_container_size'], 'Number');
            }
            if (data.hasOwnProperty('max_replicas')) {
                obj['max_replicas'] = ApiClient.convertToType(data['max_replicas'], 'Number');
            }
            if (data.hasOwnProperty('min_lifetime')) {
                obj['min_lifetime'] = ApiClient.convertToType(data['min_lifetime'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Minimum number of CPU cores required by this deployment. The system will make sure that atleast this amount is available to the deployment.
 * @member {Number} min_cpus
 * @default 1
 */
Compute.prototype['min_cpus'] = 1;

/**
 * Maximum number of CPU cores. Even so the system will try to provide the specified amount, it's only guaranteed that the deployment cannot use more. 0 means unlimited.
 * @member {Number} max_cpus
 */
Compute.prototype['max_cpus'] = undefined;

/**
 * Minimum amount of memory in Megabyte required by this deployment. The system will make sure that atleast this amount is available to the deployment.
 * @member {Number} min_memory
 * @default 1000
 */
Compute.prototype['min_memory'] = 1000;

/**
 * Maximum amount of memory in Megabyte. Even so the system will try to provide the specified amount, it's only guaranteed that the deployment cannot use more. 0 means unlimited.
 * @member {Number} max_memory
 */
Compute.prototype['max_memory'] = undefined;

/**
 * Minimum number of GPUs required by this deployments. The system will make sure that atleast this amount is available to the deployment.
 * @member {Number} min_gpus
 */
Compute.prototype['min_gpus'] = undefined;

/**
 * Maximum number of GPUs. Even so the system will try to provide the specified amount, it's only guaranteed that the deployment cannot use more.
 * @member {Number} max_gpus
 */
Compute.prototype['max_gpus'] = undefined;

/**
 * Container internal directory that should mount a volume for data persistence.
 * @member {String} volume_path
 */
Compute.prototype['volume_path'] = undefined;

/**
 * Maximum volume size in Megabyte. This is only applied in combination with volume_path.
 * @member {Number} max_volume_size
 */
Compute.prototype['max_volume_size'] = undefined;

/**
 * Maximum container size in Megabyte. The deployment will be killed if it grows above this limit.
 * @member {Number} max_container_size
 */
Compute.prototype['max_container_size'] = undefined;

/**
 * Maximum number of deployment instances. The system will make sure to optimize the deployment based on the available resources and requests. Use 1 if the deployment is not scalable.
 * @member {Number} max_replicas
 * @default 1
 */
Compute.prototype['max_replicas'] = 1;

/**
 * Minimum guaranteed lifetime in seconds. Once the lifetime is reached, the system is allowed to kill the deployment in case it requires additional resources.
 * @member {Number} min_lifetime
 * @default 0
 */
Compute.prototype['min_lifetime'] = 0;


// Implement DeploymentCompute interface:
/**
 * Minimum number of CPU cores required by this deployment. The system will make sure that atleast this amount is available to the deployment.
 * @member {Number} min_cpus
 * @default 1
 */
DeploymentCompute.prototype['min_cpus'] = 1;
/**
 * Maximum number of CPU cores. Even so the system will try to provide the specified amount, it's only guaranteed that the deployment cannot use more. 0 means unlimited.
 * @member {Number} max_cpus
 */
DeploymentCompute.prototype['max_cpus'] = undefined;
/**
 * Minimum amount of memory in Megabyte required by this deployment. The system will make sure that atleast this amount is available to the deployment.
 * @member {Number} min_memory
 * @default 1000
 */
DeploymentCompute.prototype['min_memory'] = 1000;
/**
 * Maximum amount of memory in Megabyte. Even so the system will try to provide the specified amount, it's only guaranteed that the deployment cannot use more. 0 means unlimited.
 * @member {Number} max_memory
 */
DeploymentCompute.prototype['max_memory'] = undefined;
/**
 * Minimum number of GPUs required by this deployments. The system will make sure that atleast this amount is available to the deployment.
 * @member {Number} min_gpus
 */
DeploymentCompute.prototype['min_gpus'] = undefined;
/**
 * Maximum number of GPUs. Even so the system will try to provide the specified amount, it's only guaranteed that the deployment cannot use more.
 * @member {Number} max_gpus
 */
DeploymentCompute.prototype['max_gpus'] = undefined;
/**
 * Container internal directory that should mount a volume for data persistence.
 * @member {String} volume_path
 */
DeploymentCompute.prototype['volume_path'] = undefined;
/**
 * Maximum volume size in Megabyte. This is only applied in combination with volume_path.
 * @member {Number} max_volume_size
 */
DeploymentCompute.prototype['max_volume_size'] = undefined;
/**
 * Maximum container size in Megabyte. The deployment will be killed if it grows above this limit.
 * @member {Number} max_container_size
 */
DeploymentCompute.prototype['max_container_size'] = undefined;
/**
 * Maximum number of deployment instances. The system will make sure to optimize the deployment based on the available resources and requests. Use 1 if the deployment is not scalable.
 * @member {Number} max_replicas
 * @default 1
 */
DeploymentCompute.prototype['max_replicas'] = 1;
/**
 * Minimum guaranteed lifetime in seconds. Once the lifetime is reached, the system is allowed to kill the deployment in case it requires additional resources.
 * @member {Number} min_lifetime
 * @default 0
 */
DeploymentCompute.prototype['min_lifetime'] = 0;




export default Compute;

