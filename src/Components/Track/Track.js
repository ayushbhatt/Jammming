import React from 'react';
import './Track.css';

class Track extends React.Component{
    renderAction(isRemoval){
        if(isRemoval)
        {
            return '-';
        }
        else
        {
            return '+';
        }
    }
    render()
    {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>track name</h3>
                    <p>track artist | track album </p>
                </div>
                <button className="Track-action">{this.renderAction(true)}</button>
            </div>
        );
    }
}

export default Track;