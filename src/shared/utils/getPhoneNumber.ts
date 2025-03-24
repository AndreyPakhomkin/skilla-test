interface GetPhoneNumberProps {
    in_out: number,
    to_number: string,
    from_number: string
}

export const getPhoneNumber = ({ in_out, to_number, from_number }: GetPhoneNumberProps) => {
    return in_out === 1 ? from_number : to_number;
}