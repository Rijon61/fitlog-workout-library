import React from 'react';
type Props = {
  params: Promise<{
    Id: string;
  }>;
};

const WorkoutDetailsPagepage = async({ params }: Props) => {
    const { Id } = await params;
    return (
        <div>
            <h1>{Id}</h1>
            
        </div>
    );
};

export default WorkoutDetailsPagepage;