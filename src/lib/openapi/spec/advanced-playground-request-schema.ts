import { FromSchema } from 'json-schema-to-ts';
import { ALL } from '../../types/models/api-token';
import { sdkContextSchema } from './sdk-context-schema';

export const advancedPlaygroundRequestSchema = {
    $id: '#/components/schemas/advancedPlaygroundRequestSchema',
    description:
        'Data for the playground API to evaluate toggles in advanced mode with environment and context multi selection',
    type: 'object',
    required: ['environments', 'context'],
    properties: {
        environments: {
            type: 'array',
            items: { type: 'string' },
            example: ['development', 'production'],
            description: 'The environments to evaluate toggles in.',
        },
        projects: {
            description: 'A list of projects to check for toggles in.',
            oneOf: [
                {
                    type: 'array',
                    items: { type: 'string' },
                    example: ['my-project'],
                    description: 'A list of projects to check for toggles in.',
                },
                {
                    type: 'string',
                    enum: [ALL],
                    description: 'Check toggles in all projects.',
                },
            ],
        },
        context: {
            description: 'The context to use when evaluating toggles',
            $ref: sdkContextSchema.$id,
        },
    },
    components: {
        schemas: {
            sdkContextSchema,
        },
    },
} as const;

export type AdvancedPlaygroundRequestSchema = FromSchema<
    typeof advancedPlaygroundRequestSchema
>;
