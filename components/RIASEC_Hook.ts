import { useState, useCallback } from 'react';
import { riasecApi } from './api';

export const useRiasecTest = () => {
    const [answers, setAnswers] = useState<Record<string, boolean>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleToggleAnswer = useCallback((id: string, value: boolean) => {
        setAnswers(prev => ({ ...prev, [id]: value }));
    }, []);

    const submitAnswers = useCallback(async () => {
        if (Object.keys(answers).length === 0) {
            // throw new Error('No answers to submit');
            alert('No answers to submit');
        }

        setIsSubmitting(true);
        setError(null);

        try {
            const result = await riasecApi.submitAnswers(answers);
            return result;
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Submission failed';
            setError(errorMessage);
            throw err;
        } finally {
            setIsSubmitting(false);
        }
    }, [answers]);

    const resetTest = useCallback(() => {
        setAnswers({});
        setError(null);
        setIsSubmitting(false);
    }, []);

    return {
        answers,
        isSubmitting,
        error,
        handleToggleAnswer,
        submitAnswers,
        resetTest,
    };
};