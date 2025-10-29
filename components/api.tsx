import axios, { AxiosResponse } from 'axios';
import type { HexacoSubmissionPayload, ApiResponse } from './types';

// Base API configuration
const api = axios.create({
    baseURL: 'http://127.0.0.1:5000',
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 10000,

});

// Generic API response type
export interface ApiResponse<T = any> {
    data?: T;
    message?: string;
    success?: boolean;
}


// Define proper interfaces for test payloads
export interface RiasecSubmissionPayload {
    answers: Record<string, boolean>;
    timestamp?: string;

}


// src/api/types.ts
export type HexacoSubmissionPayload = Record<
    string, // FactorName
    Record<
        string, // FacetName
        Record<number, string> // QuestionNumber: Answer
    >
>;



// API methods
export const riasecApi = {
    submitAnswers: async (answers: Record<string, boolean>): Promise<ApiResponse> => {
        const payload: RiasecSubmissionPayload = {
            answers,
            timestamp: new Date().toISOString(),
        };

        try {
            const response: AxiosResponse<ApiResponse> = await api.post('/riasec_test', payload);
            return response.data;
        } catch (error) {
            console.error('RIASEC submission failed:', error);
            throw new Error('Failed to submit RIASEC answers');
        }
    },
};

// API methods for HEXACO
export const hexacoApi = {
    submitAnswers: async (payload: HexacoSubmissionPayload): Promise<ApiResponse> => {

        try {
            const response: AxiosResponse<ApiResponse> = await api.post('/hexaco_test', payload);
            console.log('HEXACO_Payload: ', payload)
            return response.data;
        } catch (error) {
            console.error('HEXACO submission failed:', error);
            throw new Error('Failed to submit HEXACO answers');
        }
    },
};


export default api;
