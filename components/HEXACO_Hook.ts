import { useState, useCallback } from 'react';
import { hexacoApi, HexacoSubmissionPayload } from './api';

export const useHexacoTest = () => {
    const [answers, setAnswers] = useState<Record<string, 1 | 2 | 3 | 4 | 5>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSelectAnswer = useCallback((id: string, value: 1 | 2 | 3 | 4 | 5) => {
        setAnswers(prev => ({ ...prev, [id]: value }));
    }, []);

    const submitAnswers = async (payload: HexacoSubmissionPayload) => {
        await hexacoApi.submitAnswers(payload);
    };

    const resetTest = useCallback(() => {
        setAnswers({});
        setError(null);
        setIsSubmitting(false);
    }, []);

    return {
        answers,
        isSubmitting,
        error,
        handleSelectAnswer,
        submitAnswers,
        resetTest,
    };
};
