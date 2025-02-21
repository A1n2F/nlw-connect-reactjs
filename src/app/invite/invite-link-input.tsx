"use client"

import { IconButton } from "@/components/icon-button";
import { InputField, InputIcon, InputRoot } from "@/components/input";
import { Copy, Link } from "lucide-react";

interface InviteLinkInputProps {
    inviteLink: string
}

export function InviteLinkInput({ inviteLink }: InviteLinkInputProps) {
    function copyInviteLink() {
        navigator.clipboard.writeText(inviteLink)
    }

    return (
        <InputRoot>
            <InputIcon>
                <Link className="w-5 h-5"/>
            </InputIcon>

            <InputField readOnly defaultValue={inviteLink} />

            <IconButton className="-mr-2" onClick={copyInviteLink}>
                <Copy className="w-5 h-5" />
            </IconButton>
        </InputRoot>
    )
}