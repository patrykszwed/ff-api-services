import HttpClient, {APIMapping} from '../http';

export default class FunnelService {
    static client = new HttpClient(APIMapping.funnelService);

    static getPossibleTags(funnelId) {
        return this.client.makeRequestSimple({}, `/funnels/${funnelId}/possibletags`, 'GET').then(s => s.data);
    }

    static getKeysForTag(funnelId, tagName) {
        return this.client.makeRequestSimple({}, `/funnels/${funnelId}/tags/${tagName}/metadata/keys`, 'GET').then(s => s.data);
    }

    static getValuesForTagKey(funnelId, tagName, metadataKey) {
        return this.client.makeRequestSimple({}, `/funnels/${funnelId}/tags/${tagName}/metadata/keys/${metadataKey}/values`, 'GET').then(s => s.data);
    }

    static getFunnelStatistics(funnelId) {
        return this.client.makeRequestSimple({}, `/funnels/${funnelId}/statistics`, 'GET').then(s => s.data);
    }
    /**
     * createFunnel
     * @param { object } funnelToCreate funnelToCreate
     */
    static createFunnel(funnelToCreate) {
        return this.client.makeRequestSimple(funnelToCreate || {}, '/funnels', 'POST').then(s => s.data);
    }

    /**
     * findFunnelById
     * @param { string } funnelId funnelId
     */
    static findFunnelById(funnelId) {
        return this.client.makeRequestSimple({}, `/funnels/${funnelId}`, 'GET').then(s => s.data);
    }

    /**
     * deleteFunnelById
     * @param { string } funnelId funnelId
     */
    static deleteFunnelById(funnelId) {
        return this.client.makeRequestSimple({}, `/funnels/${funnelId}`, 'DELETE').then(s => s.data);
    }

    /**
     * getAllStagesOfAnFunnel
     * @param { string } funnelId funnelId
     */
    static getAllStagesOfAnFunnel(funnelId) {
        return this.client.makeRequestSimple({}, `/funnels/${funnelId}/stages`, 'GET').then(s => s.data);
    }

    /**
     * addStageAtTheEndOfTheFunnel
     * @param { string } funnelId funnelId
     * @param { object } stage stage
     */
    static addStageAtTheEndOfTheFunnel(funnelId, stage) {
        return this.client.makeRequestSimple(stage || {}, `/funnels/${funnelId}/stages`, 'POST').then(s => s.data);
    }

    /**
     * getAStagesOfAFunnel
     * @param { string } funnelId funnelId
     * @param { string } stageId stageId
     */
    static findStageById(funnelId, stageId) {
        return this.client.makeRequestSimple({}, `/funnels/${funnelId}/stages/${stageId}`, 'GET').then(s => s.data);
    }

    /**
     * addStageAfterGivenStageOfGivenFunnel
     * @param { string } funnelId funnelId
     * @param { string } stageId stageId
     * @param { object } stage stage
     */
    static addStageAfterGivenStageOfGivenFunnel(funnelId, stageId, stage) {
        return this.client.makeRequestSimple(stage, `/funnels/${funnelId}/stages/${stageId}`, 'POST').then(s => s.data);
    }

    /**
     * changeAStagesOfAFunnel
     * @param { string } funnelId funnelId
     * @param { string } stageId stageId
     * @param { object } stage stage
     */
    static changeAStagesOfAFunnel(funnelId, stageId, stage) {
        return this.client.makeRequestSimple(stage, `/funnels/${funnelId}/stages/${stageId}`, 'PUT').then(s => s.data);
    }

    /**
     * deleteStageFromFunnel
     * @param { string } funnelId funnelId
     * @param { string } stageId stageId
     */
    static deleteStageFromFunnel(funnelId, stageId) {
        return this.client.makeRequestSimple({}, `/funnels/${funnelId}/stages/${stageId}`, 'DELETE').then(s => s.data);
    }

    /**
     * getStateOfTheFunnel
     * @param { string } funnelId funnelId
     */
    static getStateOfTheFunnel(funnelId) {
        return this.client.makeRequestSimple({}, `/funnels/${funnelId}/state`, 'GET').then(s => s.data);
    }

    /**
     * changeStateOfTheFunnel
     * @param { string } funnelId funnelId
     * @param { object } state state
     */
    static changeStateOfTheFunnel(funnelId, state) {
        return this.client.makeRequestSimple(state || {}, `/funnels/${funnelId}/state`, 'POST').then(s => s.data);
    }

    /**
     * getAllActions
     */
    static getAllActions(type = 'automatic') {
        return this.client.makeRequestSimple({}, '/funnels/actions/?type=' + type, 'GET').then(s => s.data);
    }
    /*
     * executeActionForEntity
     */
    static executeActionForEntity(action, schemaId, entityId) {
        return this.client.makeRequestSimple(action, '/funnels/actions/execute/schemas/' + schemaId + '/entityId/' + entityId, 'POST');
    }
    /**
     * getDashboardInformation
     * @param { object } state state
     */
    static getDashboardInformation(state) {
        if (state) {
            return this.client.makeRequest({}, '/funnels/dashboard', 'GET', undefined, {queryParams: {state}}).then(s => s.data.dashboardFunnels);
        }
        return this.client.makeRequestSimple({}, '/funnels/dashboard', 'GET').then(s => s.data.dashboardFunnels);
    }

    /**
     * getAvailableEntryConditionsForSchema
     * @param { object } state state
     */
    static getAvailableEntryConditionsForSchema(schemaId) {
        return this.client.makeRequestSimple({}, `/availableEntryConditions/${schemaId}`, 'GET').then(s => s.data);
    }

    /**
     * getAvailableEntryConditionsForPrevStage
     * @param { object } state state
     */
    static getAvailableEntryConditionsForPrevStage(funnelId, stageId) {
        return this.client.makeRequestSimple({}, `/funnels/${funnelId}/stages/${stageId}/availableEntryConditions`, 'GET').then(s => s.data);
    }

    /**
     * updateFunnelById
     * @param funnelId
     *      The id of the funnel
     * @param data
     *      The model of the funnel as object
     */
    static updateFunnelById(funnelId, data) {
        return this.client.makeRequest({}, `/funnels/${funnelId}`, 'PUT', data);
    }

    static setStageAsFirstStage(funnelId, stageId) {
        return this.client.makeRequest({}, `/funnels/${funnelId}/stages/${stageId}/parent`, 'PUT');
    }

    static setStageAfterStage(funnelId, stageId, parentId) {
        return this.client.makeRequest({}, `/funnels/${funnelId}/stages/${stageId}/parent/${parentId}`, 'PUT');
    }
}
