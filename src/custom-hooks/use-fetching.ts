import { useState } from "react"
import { AxiosError } from 'axios'

export const useFetching = (callback: () => Promise<void> | void): [() => Promise<void>, Boolean, string] => {
    const [isLoading, setIsLoading] = useState<Boolean>(false)
    const [error, setError] = useState('')

    const fetching = async () => {
        try {
            setIsLoading(true)
            await callback()
        } catch (error) {
            setError((error as AxiosError).message)
        } finally {
            setIsLoading(false)
        }
    }
    
    return [fetching, isLoading, error]
}