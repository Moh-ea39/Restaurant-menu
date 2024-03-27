import "./header.css"
export default function Headerfunction() {
    return (
        <header>
            <div className="header_parent">
                <div className="child_header">
                    <div className="first_text_header" >
                        Most Popular
                    </div>
                    <p className="p_header">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>
                   <div className="parent_view_menu">
                        <div className="line">
                            <div className="view_menu">
                                view menu
                            </div>
                        </div>
                   </div>
                </div>
            </div>
        </header>
    )
}