import React, { useState } from "react";
import { GithubIcon, Instagram, MailIcon, Link2Icon, TwitterIcon } from "lucide-react";

const Socials: React.FC<{ onSocialsClick?: () => void }> = ({ onSocialsClick }) => {
    const [open, setOpen] = useState(false);

    const toggleSocials = () => {
        setOpen(!open);
    };

    return (
        <div className="mt-8 px-4 flex items-center">
            <button
                onClick={toggleSocials}
                className="p-2 rounded-full bg-neutral-900/80 hover:bg-neutral-800/80 transition-colors"
                aria-label="Toggle Social Links"
            >
                <Link2Icon className="w-5 h-5 text-white" />
            </button>
            {open && (
                <div className="flex items-center gap-4 ml-2">
                    <a
                        href="https://github.com/Epicguest97"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-white/80"
                        aria-label="GitHub"
                        onClick={onSocialsClick}
                    >
                        <GithubIcon className="w-5 h-5" />
                    </a>
                    <a
                        href="mailto:kaushikmehul94@gmail.com?subject=hey%20I%20want%20to%20connect"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-white/80"
                        aria-label="Mail"
                        onClick={onSocialsClick}
                    >
                        <MailIcon className="w-5 h-5" />
                    </a>
                    <a
                        href="https://www.instagram.com/mehulkaushik_/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-white/80"
                        aria-label="Instagram"
                        onClick={onSocialsClick}
                    >
                        <Instagram className="w-5 h-5" />
                    </a>
                    <a
                        href="https://x.com/kaushikmehul94"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-white/80"
                        aria-label="Twitter"
                        onClick={onSocialsClick}
                    >
                        <TwitterIcon className="w-5 h-5" />
                    </a>
                </div>
            )}
        </div>
    );
};

export default Socials;