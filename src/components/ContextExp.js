import React, { Component } from 'react';
import Parent from './Parent';

const FamilyContext = React.createContext({});

export const FamilyProvider = FamilyContext.Provider;
export const FamilyConsumer = FamilyContext.Consumer;

export class ContextExp extends Component {
    render() {
        return (
            <div>
                GrandParent Component
                <FamilyProvider value = {'dark'}>
                    <Parent />
                </FamilyProvider>
                
                
            </div>
        );
    }
}

