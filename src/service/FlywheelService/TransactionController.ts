import {APIClient, APIMapping} from '../../http';
import {AxiosResponse} from 'axios';
import {Flowdsl} from '@flowfact/node-flowdsl';

export class TransactionController extends APIClient {
    constructor() {
        super(APIMapping.flywheelService);
    }

    /**
     * Return all transactions for a specific phase
     * @param phaseName
     * @param view
     * @deprecated Because same functionality plus filter possibility can be found in POST method: fetchTransactionsForPhaseWithFilter
     */
    async fetchForPhase(phaseName: string, view: string = 'card'): Promise<AxiosResponse> {
        return this.invokeApi(`/transactions/phases/${phaseName}?view=${view}`);
    }

    /**
     * Return all transactions for a specific phase
     * @param phaseName
     * @param view
     * @param {Flowdsl} flowdsl
     */
    async fetchForPhaseWithFilter(phaseName: string, view: string = 'card', flowdsl?: Flowdsl): Promise<AxiosResponse> {
        return this.invokeApi(`/transactions/phases/${phaseName}?view=${view}`, 'POST', flowdsl);
    }

    /**
     * Moves a transaction to another phase
     * @param transactionId
     * @param fromPhaseName
     * @param toPhaseName
     */
    async move(transactionId: string, fromPhaseName: string, toPhaseName: string): Promise<AxiosResponse> {
        return this.invokeApi(`/transactions/${transactionId}`, 'PUT', {fromPhaseName, toPhaseName});
    }

    /**
     * TODO: Please comment this method
     * @param transactionId
     */
    async exitPhase(transactionId: number) {
        return this.invokeApi(
            `/transactions/${transactionId}`, 'PATCH',
            [{
                op: 'exitPhase',
            }],
            {
                headers: {
                    'Content-Type': 'application/json-patch+json',
                },
            },
        );
    }

    /**
     * TODO: Please comment this method
     * @param transactionId
     * @param entityId
     * @param targetPhase
     */
    async link(transactionId: number, entityId: string, targetPhase: number) {
        return this.invokeApi(
            `/transactions/${transactionId}`, 'PATCH',
            [{
                op: 'linkTransaction',
                entityId,
                targetPhase,
            }],
            {
                headers: {
                    'Content-Type': 'application/json-patch+json',
                },
            },
        );
    }
}
