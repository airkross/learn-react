export interface IProps {
    children?: JSX.Element | React.ReactChild | React.ReactNode
    isShownModal: boolean
    isLoading?: boolean
    setIsShownModal: (isShownModal: IProps['isShownModal']) => void
}