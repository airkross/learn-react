import { useState } from "react"
import { AxiosError } from 'axios'

type Args = Array<any>

export const useFetching = (callback: (...args: Args) => Promise<void>): [(...args: Args) => Promise<void>, boolean, string] => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>('')

    const fetching = async (...args: Args) => {
        try {
            setIsLoading(true)
            await callback(...args)
        } catch (error) {
            setError((error as AxiosError).message)
        } finally {
            setIsLoading(false)
        }
    }
    
    return [fetching, isLoading, error]
}