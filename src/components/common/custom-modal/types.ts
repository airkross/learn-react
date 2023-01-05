export interface IProps {
    children?: JSX.Element | React.ReactChild | React.ReactNode
    isShownModal: boolean
    setIsShownModal: (isShownModal: IProps['isShownModal']) => void
}